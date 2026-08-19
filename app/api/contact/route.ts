import { NextResponse } from 'next/server';
import {
  FIELD_MAX_LENGTHS,
  MIN_FILL_SECONDS,
  checkForSpam,
  hasErrors,
  isServiceTypeValue,
  validateContactForm,
} from '@/lib/contact-validation';
import { isLocale, defaultLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/translations';
import { siteConfig } from '@/content/site';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

/**
 * Contact form endpoint.
 *
 * Delivery is optional: with no e-mail provider configured the route still
 * validates and still filters spam, and returns `reason: 'not-configured'` so
 * the form can tell the visitor to e-mail directly instead. Nothing breaks and
 * no credentials are invented.
 *
 * To switch delivery on, set RESEND_API_KEY, CONTACT_FROM_EMAIL and
 * CONTACT_TO_EMAIL. See .env.example and README.md.
 */

export const runtime = 'nodejs';

/** Rejects oversized bodies before doing any work. */
const MAX_BODY_BYTES = 20_000;

/**
 * Give up on the provider rather than holding the request open.
 *
 * Without this a hung connection would run until the platform kills the
 * function, and the visitor would be left watching a spinner instead of being
 * told, in their own language, that sending failed.
 */
const PROVIDER_TIMEOUT_MS = 10_000;

/** A handful of genuine enquiries per address, comfortably above normal use,
    well below anything a script would bother staying under. */
const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 };

/* ===========================================================================
   TEMPORARY DIAGNOSTICS — remove once the delivery problem is settled.

   Both the spam branch and a successful send answer 200, so a Vercel access
   log cannot tell them apart. These lines mark which path a request took.

   Milestones only. Never a field value, never an environment value: whether
   something is configured is useful, what it is set to is not.
   =========================================================================== */
function debug(message: string) {
  console.log('[contact-debug] %s', message);
}
/* ======================= end temporary diagnostics ======================== */

function truncate(value: unknown, max: number): string {
  return typeof value === 'string' ? value.slice(0, max) : '';
}

/**
 * Strips CR/LF from anything that ends up in a mail header. Without this, a
 * crafted name or subject could inject extra headers.
 */
function sanitiseHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  debug('Request received');

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    debug('Stopped: body over size limit');
    return NextResponse.json({ ok: false, reason: 'too-large' }, { status: 413 });
  }

  // Checked before touching the body: cheap, and it keeps a burst from an
  // address from spending any more work on parsing or validation.
  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit(`contact:${clientIp}`, RATE_LIMIT);
  if (!rateLimit.allowed) {
    debug('Stopped: rate limited');
    return NextResponse.json(
      { ok: false, reason: 'rate-limited' },
      {
        status: 429,
        headers: { 'Retry-After': String(rateLimit.retryAfterSeconds) },
      }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    debug('Stopped: body was not valid JSON');
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 });
  }

  const locale = isLocale(payload.locale) ? payload.locale : defaultLocale;
  const dict = getDictionary(locale);

  const values = {
    name: truncate(payload.name, FIELD_MAX_LENGTHS.name).trim(),
    company: truncate(payload.company, FIELD_MAX_LENGTHS.company).trim(),
    email: truncate(payload.email, FIELD_MAX_LENGTHS.email).trim(),
    phone: truncate(payload.phone, FIELD_MAX_LENGTHS.phone).trim(),
    serviceType: truncate(payload.serviceType, FIELD_MAX_LENGTHS.serviceType).trim(),
    message: truncate(payload.message, FIELD_MAX_LENGTHS.message).trim(),
    website: truncate(payload.website, 200),
    /* Re-checked here: the browser can be bypassed, and the record of having
       shown the privacy notice is only meaningful if the server enforces it. */
    acknowledgement: payload.acknowledgement === true,
  };

  /**
   * The selector is optional, but an unrecognised value is dropped rather
   * than forwarded - the browser is not trusted to send only valid keys.
   */
  const serviceTypeKey = isServiceTypeValue(values.serviceType)
    ? values.serviceType
    : null;

  /* Translated back into words so the notification e-mail reads naturally
     instead of showing an internal key such as "website-redesign". */
  const serviceTypeLabel =
    dict.contact.form.serviceType.options.find(
      (option) => option.value === serviceTypeKey
    )?.label ?? '—';

  // Never trust the browser: everything is validated again here.
  const errors = validateContactForm(values, dict.contact.form.errors);
  if (hasErrors(errors)) {
    // Field names only. Which field was wrong is technical; what it held is not.
    debug(`Validation failed for: ${Object.keys(errors).join(', ')}`);
    return NextResponse.json(
      { ok: false, reason: 'validation', errors },
      { status: 400 }
    );
  }
  debug('Validation passed');

  // Spam is dropped silently with a success response, so bots learn nothing.
  const renderedAt =
    typeof payload.renderedAt === 'number' ? payload.renderedAt : 0;

  const spam = checkForSpam({ website: values.website, renderedAt });
  /* The elapsed reading is worth logging even when the check passes: it spans
     the visitor's clock and the server's, so a skewed device shows up here as
     a negative or absurd number long before anyone would suspect it. */
  const elapsed = `elapsed ${spam.elapsedSeconds.toFixed(1)}s`;

  if (spam.reason) {
    debug(
      `Spam check result: blocked (${spam.reason}, ${elapsed}, minimum ${MIN_FILL_SECONDS}s)`
    );
    debug('Stopped: answering 200 without sending, so a bot learns nothing');
    return NextResponse.json({ ok: true });
  }
  debug(`Spam check result: passed (${elapsed})`);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  /* Presence only. Never the values, and never any part of the key. */
  debug(
    `Environment configured: ${apiKey && from && to ? 'yes' : 'no'} ` +
      `(RESEND_API_KEY: ${apiKey ? 'set' : 'missing'}, ` +
      `CONTACT_FROM_EMAIL: ${from ? 'set' : 'missing'}, ` +
      `CONTACT_TO_EMAIL: ${to ? 'set' : 'missing'})`
  );

  if (!apiKey || !from || !to) {
    // Expected state until the e-mail provider is set up. Logged so the gap
    // is visible in the Vercel runtime logs - deliberately without the
    // visitor's name, e-mail or message, which have no place in server logs.
    console.warn('[contact] E-mail delivery is not configured.');
    return NextResponse.json(
      { ok: false, reason: 'not-configured' },
      { status: 503 }
    );
  }

  // Leading with the enquiry type makes the inbox scannable at a glance.
  const subject = sanitiseHeaderValue(
    [
      'Website enquiry',
      serviceTypeKey ? serviceTypeLabel : null,
      `${values.name}${values.company ? ` (${values.company})` : ''}`,
    ]
      .filter(Boolean)
      .join(' — ')
  );

  const lines = [
    ['Name', values.name],
    ['Company', values.company || '—'],
    ['Email', values.email],
    ['Phone', values.phone || '—'],
    ['Enquiry about', serviceTypeLabel],
    ['Language', locale],
  ] as const;

  const text = [
    ...lines.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    values.message,
  ].join('\n');

  const html = [
    '<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6">',
    `<h2 style="margin:0 0 16px">New enquiry via ${escapeHtml(siteConfig.url)}</h2>`,
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">',
    ...lines.map(
      ([label, value]) =>
        `<tr><td style="padding:2px 16px 2px 0;color:#666">${label}</td>` +
        `<td style="padding:2px 0"><strong>${escapeHtml(value)}</strong></td></tr>`
    ),
    '</table>',
    '<p style="margin:20px 0 4px;color:#666">Message</p>',
    `<p style="margin:0;white-space:pre-wrap">${escapeHtml(values.message)}</p>`,
    '</div>',
  ].join('');

  debug('About to call Resend');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: sanitiseHeaderValue(from),
        to: [sanitiseHeaderValue(to)],
        /* Replying in the mail client goes straight back to the enquirer.
           Validation already rejects whitespace in an address, so CR/LF cannot
           get this far; sanitised anyway, because every value that reaches a
           mail header goes through the same gate. */
        reply_to: sanitiseHeaderValue(values.email),
        subject,
        text,
        html,
      }),
      signal: AbortSignal.timeout(PROVIDER_TIMEOUT_MS),
    });

    debug(`Resend response status: ${response.status}`);

    if (!response.ok) {
      debug('Stopped: Resend rejected the message');
      // Only the status is logged. The response body can echo back request
      // fields (e.g. an invalid "to" address), so it is never logged - it
      // would put visitor-supplied content in server logs.
      console.error(
        '[contact] Provider rejected the message. Status: %d',
        response.status
      );
      return NextResponse.json(
        { ok: false, reason: 'send-failed' },
        { status: 502 }
      );
    }

    debug('Message accepted by Resend');
    return NextResponse.json({ ok: true });
  } catch (error) {
    /* Only the error's class is logged, never the error itself: a fetch
       failure can carry the request that produced it, and that request body
       holds the visitor's name, address and message. The name is the part
       worth having anyway — it separates a timeout from a network failure. */
    const kind = error instanceof Error ? error.name : 'unknown';
    debug(`Stopped: never reached Resend (${kind})`);
    console.error('[contact] Could not reach the e-mail provider (%s).', kind);
    return NextResponse.json(
      { ok: false, reason: 'send-failed' },
      { status: 502 }
    );
  }
}
