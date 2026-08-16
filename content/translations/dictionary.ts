/**
 * The shape of ALL translatable text on the site.
 *
 * Every language file must implement this interface exactly. If you add a key
 * here, TypeScript immediately reports which language files are missing it, so
 * the Dutch and English versions can never silently drift apart.
 */

export interface NavItem {
  /** Matches the `id` of the section it scrolls to. */
  id: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  /** Displayed as-is, e.g. "01". */
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Dictionary {
  /** Used for <html lang> and the "skip to content" link. */
  meta: {
    /** Browser tab title for the homepage. */
    title: string;
    /** Longer title used for social sharing cards. */
    ogTitle: string;
    description: string;
    /** Short phrase under the name in the footer and structured data. */
    tagline: string;
  };

  common: {
    skipToContent: string;
    /** Accessible label for the language switcher group. */
    languageSwitcherLabel: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    backToHome: string;
    email: string;
    phone: string;
    linkedin: string;
  };

  nav: {
    items: NavItem[];
    /** Short call-to-action button in the header. */
    cta: string;
  };

  hero: {
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
  };

  services: {
    id: string;
    eyebrow: string;
    headline: string;
    intro: string;
    items: ServiceItem[];
  };

  whyWebsite: {
    eyebrow: string;
    headline: string;
    text: string;
    benefits: string[];
  };

  work: {
    id: string;
    eyebrow: string;
    headline: string;
    intro: string;
    viewWebsite: string;
    viewDetails: string;
    /** Labels for the honest concept/client distinction on each card. */
    status: {
      concept: string;
      client: string;
    };
    /** Screen-reader-only prefix, e.g. "Project status:". */
    statusLabel: string;
    typeLabel: string;
    /** Shown when a project has no live URL yet. */
    noLiveUrl: string;
  };

  process: {
    id: string;
    eyebrow: string;
    headline: string;
    intro: string;
    steps: ProcessStep[];
  };

  about: {
    id: string;
    eyebrow: string;
    headline: string;
    /** One entry per paragraph. */
    paragraphs: string[];
  };

  areas: {
    eyebrow: string;
    headline: string;
    text: string;
    locations: string[];
    /** e.g. "en omgeving" / "and surrounding areas". */
    surrounding: string;
  };

  faq: {
    eyebrow: string;
    headline: string;
    intro: string;
    items: FaqItem[];
  };

  contact: {
    id: string;
    eyebrow: string;
    headline: string;
    text: string;
    detailsHeading: string;
    /** Country name shown under the city in the contact block. */
    country: string;
    responseNote: string;
    form: {
      heading: string;
      name: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
      optional: string;
      required: string;
      /** Accessible hint listing what "required" means. */
      requiredNote: string;
      submit: string;
      submitting: string;
      privacyNote: string;
      errors: {
        name: string;
        email: string;
        emailInvalid: string;
        message: string;
        messageShort: string;
        /** Heading of the error summary box above the form. */
        summaryHeading: string;
      };
      success: {
        heading: string;
        text: string;
      };
      failure: {
        heading: string;
        /** Generic server/network failure. */
        text: string;
        /** Shown when no e-mail provider is configured yet. */
        notConfigured: string;
      };
    };
  };

  footer: {
    tagline: string;
    description: string;
    navHeading: string;
    contactHeading: string;
    languageHeading: string;
    /** Rendered as "© {year} {name}. {rights}" */
    rights: string;
  };

  notFound: {
    title: string;
    headline: string;
    text: string;
    cta: string;
  };
}
