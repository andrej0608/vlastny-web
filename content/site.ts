/**
 * Central site configuration.
 *
 * This is the single place where contact details, business identification and
 * privacy-notice facts are defined. Everything else on the site reads from
 * here.
 *
 * Optional values are `null` by default. A value that is `null` is not
 * rendered anywhere and is left out of the structured data and the privacy
 * notice — nothing is ever shown to a visitor as an empty field or a
 * placeholder.
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

  contact: {
    /** Shown as a mailto: link in the contact section and footer. */
    email: 'juriga.andrej06@gmail.com' as string | null,

    /**
     * Full URL to your LinkedIn profile,
     * e.g. 'https://www.linkedin.com/in/andrej-juriga'.
     */
    linkedin: null as string | null,

    /** Phone number as it should be displayed. */
    phone: '+32 470 45 63 06' as string | null,

    /**
     * WhatsApp number in international format WITHOUT +, spaces or other
     * characters — this is what wa.me links require.
     */
    whatsapp: '32470456306' as string | null,
  },

  /** Location. Only used in the contact section and the privacy notice. */
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

  /**
   * -------------------------------------------------------------------------
   * BUSINESS IDENTIFICATION
   *
   * Empty until a business is actually registered. Belgian businesses are
   * generally required to show their company number and, where applicable,
   * their VAT number on their website — fill these in once you have them and
   * they appear automatically in the footer and the privacy notice.
   *
   * Leave anything you do not have as `null`. Nothing here is invented and
   * nothing renders while unset.
   * -------------------------------------------------------------------------
   */
  business: {
    /** Official trade name, if it differs from your own name. */
    legalName: null as string | null,

    /** Ondernemingsnummer / company number, e.g. '0123.456.789'. */
    companyNumber: null as string | null,

    /** BTW / VAT number, e.g. 'BE 0123.456.789'. */
    vatNumber: null as string | null,

    /**
     * Official registered business address, once one exists.
     * Deliberately separate from `location` above: `location` is only the
     * general area shown for context, never a street address.
     */
    address: null as {
      street: string;
      postalCode: string;
      city: string;
      country: string;
    } | null,
  },

  /**
   * -------------------------------------------------------------------------
   * PRIVACY NOTICE FACTS
   *
   * These drive the wording of the privacy pages so the notice always matches
   * what the site actually does. Do not name a provider here until it is
   * genuinely in use — the notice states plainly when none is configured.
   * -------------------------------------------------------------------------
   */
  privacy: {
    /**
     * Shown as "Laatst bijgewerkt" / "Last updated".
     * A fixed date on purpose: it must reflect when the notice was actually
     * reviewed, not when the site was last built. Update it by hand whenever
     * you change the notice or how data is handled.
     * Format: YYYY-MM-DD.
     */
    lastUpdated: '2026-08-19',

    /**
     * The company hosting the website, once it is deployed,
     * e.g. 'Vercel Inc.'. Leave null until that is actually the case.
     */
    hostingProvider: null as string | null,

    /**
     * The service delivering contact-form e-mails.
     *
     * This name is what the privacy notice tells visitors about: set to
     * 'Resend' it states that Resend processes the content of their message in
     * order to deliver it; set back to `null` it states that no external
     * delivery service is connected at all.
     *
     * It must therefore track reality. Keep it in step with the three
     * environment variables in Vercel (RESEND_API_KEY, CONTACT_FROM_EMAIL,
     * CONTACT_TO_EMAIL): if you ever switch delivery off, or move to another
     * provider, change this at the same time and bump `lastUpdated` above.
     */
    emailDeliveryProvider: 'Resend' as string | null,
  },
} as const;

/** Convenience: a `mailto:` href, or null when no address is configured. */
export const emailHref = siteConfig.contact.email
  ? `mailto:${siteConfig.contact.email}`
  : null;

/** Convenience: a `tel:` href, or null when no phone number is configured. */
export const telHref = siteConfig.contact.phone
  ? `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}`
  : null;

/**
 * Builds a wa.me link, optionally with a message already typed into the chat.
 *
 * This is a plain outbound URL: nothing from WhatsApp or Meta is loaded into
 * the page, and the visitor's browser only contacts them once the link is
 * deliberately clicked.
 *
 * @param message Pre-filled text, in the visitor's own language. Encoded here
 *                so callers can pass it as ordinary text.
 */
export function buildWhatsAppHref(message?: string): string | null {
  if (!siteConfig.contact.whatsapp) return null;

  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

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

/** True once any official business identification has been filled in. */
export const hasBusinessIdentification = Boolean(
  siteConfig.business.legalName ||
    siteConfig.business.companyNumber ||
    siteConfig.business.vatNumber ||
    siteConfig.business.address
);
