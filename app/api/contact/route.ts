import { NextResponse } from 'next/server';
import {
  FIELD_MAX_LENGTHS,
  hasErrors,
  isServiceTypeValue,
  looksLikeSpam,
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

/** A handful of genuine enquiries per address, comfortably above normal use,
    well below anything a script would bother staying under. */
const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 };

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
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, reason: 'too-large' }, { status: 413 });
  }

  // Checked before touching the body: cheap, and it keeps a burst from an
  // address from spending any more work on parsing or validation.
  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit(`contact:${clientIp}`, RATE_LIMIT);
  if (!rateLimit.allowed) {
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
    return NextResponse.json(
      { ok: false, reason: 'validation', errors },
      { status: 400 }
    );
  }

  // Spam is dropped silently with a success response, so bots learn nothing.
  const renderedAt =
    typeof payload.renderedAt === 'number' ? payload.renderedAt : 0;

  if (looksLikeSpam({ website: values.website, renderedAt })) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

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
        // Replying in the mail client goes straight back to the enquirer.
        reply_to: values.email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Could not reach the e-mail provider:', error);
    return NextResponse.json(
      { ok: false, reason: 'send-failed' },
      { status: 502 }
    );
  }
}
