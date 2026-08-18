import type { Locale } from '@/lib/i18n';

/**
 * PORTFOLIO PROJECTS
 * ------------------------------------------------------------------
 * To add a project, append an entry to the `projects` array below.
 * Nothing else needs to change - the Work section and the optional detail
 * pages both read from this file.
 *
 * Each card is written to answer three questions in order:
 *   1. `type`        - what kind of business or problem is this?
 *   2. `description` - what was created?
 *   3. `value`       - what does it actually achieve?
 *
 * Describe the outcome, not the tooling. The `technologies` field exists for
 * your own notes and is deliberately never rendered.
 *
 * Be honest with `status`:
 *   'concept' -> a self-initiated demo or study. NOT a paid engagement.
 *   'client'  -> real, paid work delivered for a real client.
 */

/** Honest distinction between demo work and real client work. */
export type ProjectStatus = 'concept' | 'client';

export interface ProjectImage {
  /** Path under /public, e.g. '/projects/my-project.jpg' */
  src: string;
  /** Intrinsic size, required to prevent layout shift. */
  width: number;
  height: number;
  /** Descriptive alt text per language. Never leave this empty. */
  alt: Record<Locale, string>;
  /** Optional short label shown beneath the image in a gallery. */
  caption?: Record<Locale, string>;
}

/**
 * A short screen recording shown on the detail page.
 *
 * Encode as H.264 MP4 with `-movflags +faststart` so it streams rather than
 * downloading whole, and keep it small — this is a demo, not a film. Strip the
 * audio track unless the recording genuinely has narration.
 */
export interface ProjectVideo {
  /** Path under /public. */
  src: string;
  /** Still frame shown before playback, so the player is never a black box. */
  poster: string;
  /** Intrinsic size, required to reserve the right space. */
  width: number;
  height: number;
  /**
   * What the recording shows, per language. Rendered as a visible caption:
   * a silent screen capture must not be the only way to get the information.
   */
  description: Record<Locale, string>;
}

/**
 * A titled block of prose on a case-study page, e.g. "The problem".
 *
 * The heading lives with the project rather than in the language files because
 * it is specific to that project's story, not a label reused across the site.
 */
export interface ProjectBlock {
  id: string;
  heading: Record<Locale, string>;
  paragraphs: Record<Locale, string[]>;
}

/** A short left-to-right process shown as connected steps. */
export interface ProjectWorkflow {
  heading: Record<Locale, string>;
  steps: Array<{ id: string; label: Record<Locale, string> }>;
}

/**
 * A note about the material being shown, e.g. that demo data is fictional.
 *
 * Rendered quietly at the foot of the page: it has to be findable and honest,
 * not alarming.
 */
export interface ProjectNote {
  heading: Record<Locale, string>;
  text: Record<Locale, string>;
}

/** Optional long-form content for a project detail page. */
export interface ProjectDetail {
  /** One entry per paragraph, per language. */
  paragraphs: Record<Locale, string[]>;
  /** Optional bullet list of what the project demonstrates. */
  highlights?: Record<Locale, string[]>;
  /** Optional screenshot gallery. The first image is shown largest. */
  gallery?: ProjectImage[];
  /** Optional demo recording. */
  video?: ProjectVideo;
  /** Optional closing line about what the result achieves for a visitor. */
  outcome?: Record<Locale, string>;
  /** Optional titled prose blocks, rendered after the highlights. */
  blocks?: ProjectBlock[];
  /** Optional process diagram, rendered after the blocks. */
  workflow?: ProjectWorkflow;
  /**
   * Optional per-project overrides for the two headings that otherwise come
   * from the language files. Use when a project's own wording reads better.
   */
  videoHeading?: Record<Locale, string>;
  outcomeHeading?: Record<Locale, string>;
  /** Optional note about the material shown, e.g. a demo-data disclaimer. */
  note?: ProjectNote;
}

export interface Project {
  /** URL-safe, stable. Used for the optional detail page. */
  slug: string;

  /** Project or business name shown on the card. */
  name: string;

  /** What was created. One or two sentences, per language. */
  description: Record<Locale, string>;

  /** Business category, e.g. "Restaurant", per language. */
  type: Record<Locale, string>;

  /**
   * Optional. What the project achieves for the business, in one short line.
   * Rendered as the closing line of the card.
   */
  value?: Record<Locale, string>;

  status: ProjectStatus;

  /** Screenshot. Set to `null` to render a neutral placeholder instead. */
  image: ProjectImage | null;

  /** Live URL, or `null` when the site is not published. */
  url: string | null;

  /**
   * Invitation shown in place of the "not online yet" note when a project has
   * no live URL, linking to the contact section.
   *
   * Worded per project because the question worth asking differs: a website
   * concept invites "want one like this?", an automation concept invites
   * "could this help you?". Falls back to the neutral note when unset.
   */
  contactCta?: Record<Locale, string>;

  /**
   * Public source repository, or `null`. Like `url`, the link is only rendered
   * once a real address is set — never as a disabled or dead button.
   */
  repositoryUrl?: string | null;

  /**
   * Kept deliberately out of the client-facing UI. Useful as an internal note;
   * nothing renders this. Clients buy the result, not the tooling.
   */
  technologies?: string[];

  /** Provide this to generate a detail page at /<lang>/werk|work/<slug>. */
  detail?: ProjectDetail;

  /** Lower numbers appear first. */
  order: number;
}

export const projects: Project[] = [
  {
    slug: 'automotive-service-website',
    name: 'Automotive Service Website',
    type: { nl: 'Website concept', en: 'Website concept' },
    description: {
      nl: 'Een conceptwebsite voor een garage- of servicebedrijf. Bezoekers zien meteen welke diensten er zijn, wanneer de zaak open is en hoe ze contact opnemen — op de telefoon net zo goed als op de computer.',
      en: 'A concept website for a garage or service business. Visitors see straight away which services are offered, when the business is open and how to get in touch — on a phone just as well as on a computer.',
    },
    value: {
      nl: 'Bezoekers zien meteen wat het bedrijf doet en kunnen in één stap contact opnemen.',
      en: 'Visitors immediately see what the business does and can get in touch in a single step.',
    },
    status: 'concept',
    /* Featured image for the card. The hero screenshot reads best at card
       size: the headline is legible even when scaled down. */
    image: {
      src: '/projects/automotive/hero.webp',
      width: 1600,
      height: 776,
      alt: {
        nl: 'Homepage van de conceptwebsite, met de titel en een blok met openingsuren en garantie.',
        en: 'Homepage of the concept website, showing the headline and a panel with opening hours and warranty.',
      },
    },
    /* Not published, so no link is shown. Never point this at someone
       else's website. */
    url: null,
    contactCta: {
      nl: 'Ook zo’n website nodig? Laten we praten.',
      en: 'Want something like this? Let’s talk.',
    },
    repositoryUrl: null,
    technologies: ['Next.js'],
    detail: {
      paragraphs: {
        nl: [
          'Een conceptwebsite voor een autoservicebedrijf. Het laat zien hoe een moderne website meteen duidelijk maakt wat een bedrijf doet, welke diensten het aanbiedt, waar het te vinden is en hoe klanten contact opnemen.',
        ],
        en: [
          'A concept website for a car service business. It shows how a modern website makes it immediately clear what a business does, which services it offers, where to find it and how customers get in touch.',
        ],
      },
      highlights: {
        nl: [
          'Diensten in één oogopslag duidelijk',
          'Werkt vlot op de telefoon',
          'Bellen of een afspraak vragen in één klik',
          'Professionele uitstraling voor een lokaal bedrijf',
        ],
        en: [
          'Services clear at a glance',
          'Works smoothly on a phone',
          'Call or request an appointment in one click',
          'A professional look for a local business',
        ],
      },
      gallery: [
        {
          src: '/projects/automotive/hero.webp',
          width: 1600,
          height: 776,
          alt: {
            nl: 'Homepage met de titel “Professionele autoherstellingen in Brussel”, twee actieknoppen en een blok met openingsuren, ervaring en garantie.',
            en: 'Homepage with the headline “Professional car repairs in Brussels”, two action buttons and a panel showing opening hours, experience and warranty.',
          },
          caption: {
            nl: 'Startsectie',
            en: 'Hero section',
          },
        },
        {
          src: '/projects/automotive/services.webp',
          width: 1600,
          height: 772,
          alt: {
            nl: 'Overzicht van acht diensten in een raster, elk met een icoon, een titel en een korte omschrijving.',
            en: 'Overview of eight services in a grid, each with an icon, a title and a short description.',
          },
          caption: {
            nl: 'Overzicht van diensten',
            en: 'Services overview',
          },
        },
        {
          src: '/projects/automotive/gallery.webp',
          width: 1600,
          height: 778,
          alt: {
            nl: 'Fotogalerij van de werkplaats met beelden van de garage, herstellingen, computerdiagnose, remmen, banden en olieverversing.',
            en: 'Photo gallery of the workshop showing the garage, repairs, computer diagnostics, brakes, tyres and oil changes.',
          },
          caption: {
            nl: 'Werkplaats in beeld',
            en: 'Workshop gallery',
          },
        },
      ],
      video: {
        src: '/projects/automotive/demo.mp4',
        poster: '/projects/automotive/demo-poster.webp',
        width: 1440,
        height: 684,
        description: {
          nl: 'Schermopname zonder geluid: een doorloop van de conceptwebsite, van de startsectie langs de diensten en de werkplaats tot de contactmogelijkheden.',
          en: 'Silent screen recording: a walkthrough of the concept website, from the hero section past the services and the workshop through to the contact options.',
        },
      },
      outcome: {
        nl: 'Bezoekers zien snel wat het bedrijf doet, welke diensten worden aangeboden en hoe ze eenvoudig contact kunnen opnemen of een afspraak kunnen maken.',
        en: 'Visitors quickly understand what the business does, which services are offered and how they can easily get in touch or book an appointment.',
      },
    },
    order: 1,
  },
  {
    slug: 'automated-quotation-tool',
    name: 'Automated Quotation Tool',
    type: { nl: 'Bedrijfsautomatisering', en: 'Business automation' },
    description: {
      nl: 'Offertes maken kost tijd: dezelfde klantgegevens worden telkens opnieuw overgetypt. Deze toepassing laat zien hoe die gegevens één keer worden ingevuld, waarna de offerte automatisch wordt opgebouwd.',
      en: 'Preparing quotations takes time: the same customer details get typed over again every time. This tool shows how those details are filled in once, after which the quotation is built automatically.',
    },
    value: {
      nl: 'Minder handmatig overtypen, minder fouten en offertes die er elke keer hetzelfde uitzien.',
      en: 'Less manual re-typing, fewer mistakes, and quotations that look the same every time.',
    },
    status: 'concept',
    /* Featured image for the card, matching the automotive project's
       treatment: one screenshot of the running interface. */
    image: {
      src: '/projects/quotation-tool/hero.webp',
      width: 1600,
      height: 770,
      alt: {
        nl: 'Offertetoepassing met velden voor klantgegevens en evenementgegevens, en een offerteoverzicht ernaast.',
        en: 'Quotation application with fields for customer and event details, and a quotation summary alongside.',
      },
    },
    url: null,
    contactCta: {
      nl: 'Kan dit uw bedrijf helpen? Laten we praten.',
      en: 'Could this help your business? Let’s talk.',
    },
    repositoryUrl: null,
    technologies: ['Next.js'],
    detail: {
      paragraphs: {
        nl: [
          'Een concepttoepassing die laat zien hoe een klantaanvraag, de gegevens van het evenement, de producten en de prijzen samenkomen in één offerte — zonder dat iemand alles opnieuw moet intypen.',
        ],
        en: [
          'A concept tool showing how a customer request, the event details, the products and the prices come together in one quotation — without anyone having to type it all again.',
        ],
      },
      blocks: [
        {
          id: 'problem',
          heading: { nl: 'Het probleem', en: 'The problem' },
          paragraphs: {
            nl: [
              'Bij veel bedrijven worden de gegevens uit een klantaanvraag nog met de hand overgetypt in een formulier, een prijslijst of een offerte. Dat kost tijd en zorgt ervoor dat offertes er niet altijd hetzelfde uitzien.',
            ],
            en: [
              'In many businesses, the details from a customer request are still typed over by hand into a form, a price list or a quotation. That takes time, and quotations do not always end up looking the same.',
            ],
          },
        },
        {
          id: 'solution',
          heading: { nl: 'De oplossing', en: 'The solution' },
          paragraphs: {
            nl: [
              'De klant- en evenementgegevens worden één keer ingevuld. Diensten, producten en prijzen worden aangeklikt en de offerte wordt automatisch opgebouwd.',
              'De demo laat zien hoe dezelfde gegevens niet telkens opnieuw hoeven te worden overgetypt.',
            ],
            en: [
              'The customer and event details are filled in once. Services, products and prices are picked from a list and the quotation is built automatically.',
              'The demo shows how the same details no longer have to be typed over again each time.',
            ],
          },
        },
      ],
      workflow: {
        heading: { nl: 'Hoe het werkt', en: 'How it works' },
        steps: [
          { id: 'enquiry', label: { nl: 'Klantaanvraag', en: 'Customer request' } },
          { id: 'process', label: { nl: 'Gegevens één keer invullen', en: 'Details filled in once' } },
          { id: 'pricing', label: { nl: 'Producten & prijzen', en: 'Products & prices' } },
          { id: 'quote', label: { nl: 'Offerte klaar', en: 'Quotation ready' } },
        ],
      },
      gallery: [
        {
          src: '/projects/quotation-tool/hero.webp',
          width: 1600,
          height: 770,
          alt: {
            nl: 'Schermafbeelding van de offertetoepassing: bovenaan een blok om een aanvraag te herkennen, daaronder velden voor klantgegevens en evenementgegevens, met rechts een offerteoverzicht.',
            en: 'Screenshot of the quotation application: a block at the top for recognising an enquiry, fields for customer and event details below it, and a quotation summary on the right.',
          },
          caption: {
            nl: 'Demo-interface voor klantgegevens, evenementinformatie en offertevoorbereiding.',
            en: 'Demo interface for customer details, event information and quotation preparation.',
          },
        },
      ],
      videoHeading: { nl: 'Bekijk de demo', en: 'Watch the demo' },
      video: {
        src: '/projects/quotation-tool/demo.mp4',
        poster: '/projects/quotation-tool/demo-poster.webp',
        width: 1440,
        height: 810,
        description: {
          nl: 'Schermopname zonder geluid: een aanvraag wordt ingevoerd, de gegevens worden verwerkt, producten en prijzen worden gekozen en de offerte wordt opgebouwd.',
          en: 'Silent screen recording: an enquiry is entered, the details are processed, products and prices are selected and the quotation is built up.',
        },
      },
      outcomeHeading: { nl: 'Wat dit laat zien', en: 'What this demonstrates' },
      outcome: {
        nl: 'Niemand hoeft elke offerte nog vanaf nul op te bouwen. Dezelfde gegevens worden maar één keer ingevuld, waardoor er minder overtypwerk is en elke offerte er hetzelfde uitziet.',
        en: 'Nobody has to build every quotation from scratch. The same details are filled in only once, so there is less re-typing and every quotation looks the same.',
      },
      note: {
        heading: { nl: 'Demo-opmerking', en: 'Demo note' },
        text: {
          nl: 'Deze toepassing wordt getoond in een testomgeving. Namen, contactgegevens, bedrijfsgegevens en andere informatie in de screenshots en demo zijn fictief of willekeurig gekozen en vertegenwoordigen geen echte klanten.',
          en: 'This application is shown in a test environment. Names, contact details, company information and other data visible in the screenshots and demo are fictional or randomly selected and do not represent real customers.',
        },
      },
    },
    order: 2,
  },
];

/** Projects in display order. */
export function getProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Only projects that have detail content get a detail page. */
export function getProjectsWithDetail(): Project[] {
  return getProjects().filter((project) => project.detail !== undefined);
}
