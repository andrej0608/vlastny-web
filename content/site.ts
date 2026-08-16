/**
 * Central site configuration.
 *
 * THIS IS THE FILE TO EDIT for your real e-mail address, LinkedIn profile and
 * (optional) phone number. Everything else on the site reads from here, so you
 * only ever change these values in one place.
 *
 * Every contact channel below is nullable and starts as `null`. A channel that
 * is not configured is simply not rendered — no dummy address is ever shown to
 * a visitor. Set the ones you want to use.
 */

export const siteConfig = {
  /** Your name, as shown in the footer, contact block and structured data. */
  name: 'Andrej Juriga',

  /**
   * Public production URL, without a trailing slash.
   * Set NEXT_PUBLIC_SITE_URL in Vercel once your domain is connected.
   * Only used for canonical URLs, hreflang and the sitemap — never shown
   * to visitors as text.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.example.com').replace(
    /\/$/,
    ''
  ),

  /**
   * -------------------------------------------------------------------------
   * CONTACT CHANNELS — fill these in before the site goes live.
   *
   * Each value is optional. `null` means "not configured yet" and the channel
   * disappears from the contact section, the footer and the structured data.
   *
   * Configure AT LEAST an e-mail address, or set up form delivery (see
   * .env.example), otherwise a visitor has no way to reach you.
   * -------------------------------------------------------------------------
   */
  contact: {
    /**
     * Your e-mail address, e.g. 'andrej@yourdomain.be'.
     * Shown as a mailto: link in the contact section and footer.
     */
    email: null as string | null,

    /**
     * Full URL to your LinkedIn profile,
     * e.g. 'https://www.linkedin.com/in/andrej-juriga'.
     */
    linkedin: null as string | null,

    /** Phone number in international format, e.g. '+32 470 00 00 00'. */
    phone: null as string | null,

    /**
     * WhatsApp number in international format WITHOUT + or spaces,
     * e.g. '32470000000'.
     */
    whatsapp: null as string | null,
  },

  /** Location. Only used in the contact section, never in marketing copy. */
  location: {
    city: 'Achel',
    countryNl: 'België',
    countryEn: 'Belgium',
    /** ISO 3166-1 alpha-2, used in structured data. */
    countryCode: 'BE',
    region: 'Limburg',
    postalCode: '3930',
  },

  /** Countries served, used in structured data. */
  areaServedCountryCodes: ['BE', 'NL'],
} as const;

/** Convenience: a `mailto:` href, or null when no address is configured. */
export const emailHref = siteConfig.contact.email
  ? `mailto:${siteConfig.contact.email}`
  : null;

/** Convenience: a `tel:` href, or null when no phone number is configured. */
export const telHref = siteConfig.contact.phone
  ? `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}`
  : null;

/** Convenience: a WhatsApp link, or null when no number is configured. */
export const whatsappHref = siteConfig.contact.whatsapp
  ? `https://wa.me/${siteConfig.contact.whatsapp}`
  : null;

/**
 * True when at least one direct contact channel is configured.
 *
 * The contact section uses this to decide whether to render the "contact
 * details" block at all, rather than showing an empty heading.
 */
export const hasDirectContactChannel = Boolean(
  siteConfig.contact.email ||
    siteConfig.contact.phone ||
    siteConfig.contact.whatsapp ||
    siteConfig.contact.linkedin
);
