/**
 * Central site configuration.
 *
 * THIS IS THE FILE TO EDIT for your real e-mail address, LinkedIn profile and
 * (optional) phone number. Everything else on the site reads from here, so you
 * only ever change these values in one place.
 */

export const siteConfig = {
  /** Your name, as shown in the footer, contact block and structured data. */
  name: 'Andrej Juriga',

  /**
   * Public production URL, without a trailing slash.
   * Set NEXT_PUBLIC_SITE_URL in Vercel once your domain is connected.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.example.com').replace(
    /\/$/,
    ''
  ),

  /**
   * ---------------------------------------------------------------------
   * REPLACE THESE PLACEHOLDERS WITH YOUR REAL DETAILS
   * ---------------------------------------------------------------------
   */
  contact: {
    /** Shown as a mailto: link in the contact section and footer. */
    email: 'hello@example.com',

    /** Full URL to your LinkedIn profile. */
    linkedin: 'https://www.linkedin.com/in/your-profile',

    /**
     * Optional phone number.
     * Set to `null` to hide the phone line everywhere on the site.
     * Use international format, e.g. '+32 470 00 00 00'.
     */
    phone: null as string | null,

    /**
     * Optional WhatsApp number in international format WITHOUT + or spaces,
     * e.g. '32470000000'. Set to `null` to hide the WhatsApp link.
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

/** Convenience: a `tel:` href, or null when no phone number is configured. */
export const telHref = siteConfig.contact.phone
  ? `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}`
  : null;

/** Convenience: a WhatsApp link, or null when no number is configured. */
export const whatsappHref = siteConfig.contact.whatsapp
  ? `https://wa.me/${siteConfig.contact.whatsapp}`
  : null;
