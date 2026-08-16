/**
 * Contact form validation.
 *
 * Deliberately shared between the browser and the server route, so the two can
 * never disagree about what counts as valid. The browser gets instant feedback;
 * the server re-checks everything, because client-side validation can be
 * bypassed and must never be trusted on its own.
 */

export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  /**
   * What kind of work the enquiry is about. Optional, so a visitor is never
   * blocked by a category that does not quite fit.
   */
  serviceType: string;
  message: string;
  /** Whether the privacy-notice acknowledgement box was ticked. */
  acknowledgement: boolean;
  /** Hidden anti-spam field. Real people never fill this in. */
  website: string;
  /** Timestamp (ms) of when the form was rendered. */
  renderedAt: number;
}

/**
 * Accepted values for the service-type selector.
 *
 * Language-independent on purpose: the visitor sees a translated label, but
 * what is submitted and stored is always one of these stable keys. Anything
 * else is discarded server-side rather than trusted.
 */
export const SERVICE_TYPE_VALUES = [
  'new-website',
  'website-redesign',
  'automation',
  'other',
] as const;

export type ServiceTypeValue = (typeof SERVICE_TYPE_VALUES)[number];

export function isServiceTypeValue(value: string): value is ServiceTypeValue {
  return (SERVICE_TYPE_VALUES as readonly string[]).includes(value);
}

/** Which fields can carry an error message. */
export type ContactFieldError =
  | 'name'
  | 'email'
  | 'message'
  | 'acknowledgement';

export type ContactErrors = Partial<Record<ContactFieldError, string>>;

/** Error message text, supplied by the active language file. */
export interface ContactErrorMessages {
  name: string;
  email: string;
  emailInvalid: string;
  message: string;
  messageShort: string;
  acknowledgement: string;
}

export const MESSAGE_MIN_LENGTH = 10;

export const FIELD_MAX_LENGTHS = {
  name: 120,
  company: 160,
  email: 254,
  phone: 40,
  serviceType: 40,
  message: 4000,
} as const;

/**
 * Pragmatic e-mail check: one @, something either side, a dot in the domain,
 * no whitespace. Anything stricter starts rejecting valid addresses.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function validateContactForm(
  values: Pick<ContactFormValues, 'name' | 'email' | 'message'> & {
    /**
     * Confirms the privacy notice was shown and read. This records that the
     * visitor was informed - it is NOT consent to processing, which is not
     * the legal basis for answering an enquiry.
     */
    acknowledgement: boolean;
  },
  messages: ContactErrorMessages
): ContactErrors {
  const errors: ContactErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!values.acknowledgement) {
    errors.acknowledgement = messages.acknowledgement;
  }

  if (name.length === 0) {
    errors.name = messages.name;
  }

  if (email.length === 0) {
    errors.email = messages.email;
  } else if (!isValidEmail(email)) {
    errors.email = messages.emailInvalid;
  }

  if (message.length === 0) {
    errors.message = messages.message;
  } else if (message.length < MESSAGE_MIN_LENGTH) {
    errors.message = messages.messageShort;
  }

  return errors;
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Spam heuristics, applied on the server only.
 *
 * 1. Honeypot: a field hidden from humans. If it has a value, a bot filled it.
 * 2. Timing: automated submissions arrive almost instantly. A human needs a
 *    few seconds to read the labels and type.
 *
 * Both fail silently to the sender - a bot gets a normal-looking success
 * response and no signal about what gave it away.
 */
export const MIN_FILL_SECONDS = 3;

export function looksLikeSpam(input: {
  website: string;
  renderedAt: number;
  now?: number;
}): boolean {
  if (input.website.trim().length > 0) return true;

  const now = input.now ?? Date.now();
  const elapsedSeconds = (now - input.renderedAt) / 1000;

  // A missing or nonsensical timestamp is treated as suspicious.
  if (!Number.isFinite(input.renderedAt) || input.renderedAt <= 0) return true;

  return elapsedSeconds < MIN_FILL_SECONDS;
}
