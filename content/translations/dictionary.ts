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
  /**
   * Alt text for the card illustration. Describes what the picture shows, in
   * the reader's own language.
   */
  imageAlt: string;
}

export interface ProcessStep {
  /** Displayed as-is, e.g. "01". */
  number: string;
  title: string;
  description: string;
}

/** A named benefit with a short explanation of the outcome it produces. */
export interface BenefitItem {
  title: string;
  description: string;
}

/** One example of what automation can do, shown in the automation section. */
export interface AutomationUseCase {
  id: string;
  title: string;
  description: string;
}

/**
 * A worked example, told as problem -> solution -> result.
 *
 * The `result` line is deliberately modest: it describes how the work changes,
 * never a percentage or a time saving, because no such figure has been
 * measured for any real client.
 */
export interface WorkedExample {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
}

/** One option in the contact form's "how can I help" selector. */
export interface ServiceTypeOption {
  /** Stable, language-independent value submitted with the form. */
  value: string;
  label: string;
}

/**
 * A sentence with a link in the middle of it.
 *
 * Split into three parts rather than stored as HTML: the link stays a real
 * React element, so it is keyboard accessible and correctly localised without
 * any raw-HTML injection.
 */
export interface LinkedText {
  before: string;
  linkText: string;
  after: string;
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
    whatsapp: string;
  };

  nav: {
    items: NavItem[];
    /** Short call-to-action button in the header. */
    cta: string;
  };

  hero: {
    /**
     * The headline, split into three parts purely so the middle one can be
     * highlighted. Concatenated they must read exactly as the approved
     * sentence — never change the wording here, only where the split falls.
     */
    headlineLead: string;
    headlineAccent: string;
    headlineTail: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    /**
     * Three short reassurances under the actions. These restate facts already
     * stated elsewhere on the page — they are not new claims.
     */
    points: string[];
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
    benefits: BenefitItem[];
  };

  /**
   * Business automation gets its own section rather than living only as one
   * service card - it is the main thing that sets this offering apart.
   */
  automation: {
    id: string;
    eyebrow: string;
    headline: string;
    intro: string;
    useCases: AutomationUseCase[];
    /** Leads to the contact section. */
    cta: string;
  };

  /**
   * Context section: how quickly AI use is spreading among EU businesses.
   *
   * The figures themselves live in `content/ai-adoption.ts` so the chart and
   * this copy cannot drift apart.
   */
  aiAdoption: {
    id: string;
    eyebrow: string;
    headline: string;
    intro: string;
    /** Accessible name for the chart as a whole. */
    chartLabel: string;
    /** Heading of the screen-reader table that mirrors the chart. */
    chartTableHeading: string;
    yearColumn: string;
    shareColumn: string;
    /** Axis caption, e.g. "Share of EU enterprises". */
    axisLabel: string;
    source: string;
  };

  /** Practical worked examples, shown as a grid of problem/solution/result. */
  examples: {
    id: string;
    eyebrow: string;
    headline: string;
    intro: string;
    labels: {
      problem: string;
      solution: string;
      result: string;
    };
    items: WorkedExample[];
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
    /** Screen-reader prefix for a project's outcome line. */
    valueLabel: string;
    /** Headings and labels used on a project's case-study page. */
    detail: {
      showsHeading: string;
      screenshotsHeading: string;
      videoHeading: string;
      outcomeHeading: string;
      /** Shown by browsers that cannot play the video at all. */
      videoUnsupported: string;
      /** Only rendered when a project has a real repository URL. */
      viewRepository: string;
    };
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
    /**
     * Text pre-filled into WhatsApp when the visitor opens a chat, in their
     * own language. They can still edit or delete it before sending.
     */
    whatsappMessage: string;
    /** Accessible name for the WhatsApp link, e.g. "Chat on WhatsApp". */
    whatsappAction: string;
    form: {
      heading: string;
      name: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      /** Selector letting the visitor say what kind of work they need. */
      serviceType: {
        label: string;
        /** Shown as the unselected first option. */
        placeholder: string;
        options: ServiceTypeOption[];
      };
      message: { label: string; placeholder: string };
      optional: string;
      required: string;
      /** Accessible hint listing what "required" means. */
      requiredNote: string;
      submit: string;
      submitting: string;
      privacyNote: string;
      /**
       * Notice shown near the submit button, linking to the privacy page.
       * Worded as information about processing, NOT as a consent request:
       * responding to an enquiry does not rely on consent.
       */
      privacyNotice: LinkedText;
      /**
       * Required tick-box confirming the privacy notice was read.
       * This is an acknowledgement of having been informed - deliberately not
       * phrased as consent to processing.
       */
      acknowledgement: LinkedText;
      errors: {
        name: string;
        email: string;
        emailInvalid: string;
        message: string;
        messageShort: string;
        /** Shown when the privacy acknowledgement box is left unticked. */
        acknowledgement: string;
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
        /** Shown when too many attempts have come from this visitor recently. */
        rateLimited: string;
        /**
         * Appended only when an e-mail address is configured in site.ts.
         * Without it the visitor is never pointed at an address that does
         * not exist.
         */
        emailFallback: string;
      };
    };
  };

  footer: {
    tagline: string;
    description: string;
    navHeading: string;
    contactHeading: string;
    languageHeading: string;
    legalHeading: string;
    /** Rendered as "© {year} {name}. {rights}" */
    rights: string;
    /** Labels for the business identification block, shown only once set. */
    business: {
      companyNumber: string;
      vatNumber: string;
    };
  };

  /**
   * Privacy notice.
   *
   * The wording deliberately tracks what the site actually does. Anything that
   * depends on configuration (which providers are in use, whether form
   * delivery is switched on) is written as alternatives and chosen at render
   * time from `siteConfig.privacy` — so the notice cannot drift away from the
   * implementation.
   */
  privacy: {
    /** Route segment: the same word in both languages, so /nl/privacy works. */
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    lastUpdatedLabel: string;
    backToHome: string;

    controller: { heading: string; intro: string };

    dataCollected: {
      heading: string;
      intro: string;
      formItems: string[];
      technical: string;
    };

    purposes: { heading: string; intro: string; items: string[] };

    legalBasis: { heading: string; paragraphs: string[] };

    retention: { heading: string; paragraphs: string[] };

    sharing: {
      heading: string;
      intro: string;
      /** Used when no e-mail delivery provider is configured. */
      noEmailProvider: string;
      /** Contains a {provider} placeholder. */
      emailProvider: string;
      /** Contains a {provider} placeholder. */
      hostingProvider: string;
      /** Used before the site is hosted with a named provider. */
      hostingUnknown: string;
      serverLogs: string;
    };

    international: { heading: string; paragraphs: string[] };

    cookies: {
      heading: string;
      intro: string;
      /**
       * Renamed from `languageCookie` when the language cookie was removed:
       * the language now lives in the URL, so there is no cookie left to
       * describe. The key would otherwise promise a cookie that is gone.
       */
      noCookies: string;
      noTracking: string;
      /**
       * Page-view measurement. Separate from `noTracking` because it is the
       * one thing on the site that does count something: it has to be stated
       * plainly rather than hidden inside a sentence about what is absent.
       */
      analytics: string;
    };

    rights: {
      heading: string;
      intro: string;
      items: string[];
      howTo: string;
      complaint: string;
    };

    security: { heading: string; paragraphs: string[] };

    changes: { heading: string; paragraphs: string[] };
  };

  notFound: {
    title: string;
    headline: string;
    text: string;
    cta: string;
  };
}
