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
      nl: 'Een conceptwebsite voor een garage- of servicebedrijf. Het concept laat zien hoe diensten, bedrijfsinformatie, locatie en contactmogelijkheden overzichtelijk kunnen worden gepresenteerd, met een indeling die even goed werkt op de telefoon als op de computer.',
      en: 'A concept website for a garage or service company. It shows how services, company information, location and contact options can be presented clearly, with a layout that works as well on a phone as on a computer.',
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
    repositoryUrl: null,
    technologies: ['Next.js'],
    detail: {
      paragraphs: {
        nl: [
          'Een conceptwebsite voor een autoservicebedrijf. Dit project laat zien hoe een moderne website diensten, bedrijfsinformatie, locatie en contactmogelijkheden op een duidelijke en professionele manier kan presenteren.',
        ],
        en: [
          'A concept website for an automotive service company. This project demonstrates how a modern website can present services, company information, location and contact options in a clear and professional way.',
        ],
      },
      highlights: {
        nl: [
          'Duidelijke presentatie van diensten',
          'Sterke mobiele gebruikservaring',
          'Eenvoudige contactmogelijkheden',
          'Professionele uitstraling voor een lokale dienstverlener',
        ],
        en: [
          'Clear presentation of services',
          'Strong mobile experience',
          'Simple contact options',
          'Professional online presence for a local service business',
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
      nl: 'Een praktische toepassing waarmee klantgegevens en aanvragen kunnen worden verwerkt om sneller en consistenter offertes voor te bereiden. Het project laat zien hoe terugkerende administratieve processen binnen een bedrijf kunnen worden vereenvoudigd.',
      en: 'A practical application that processes customer information and enquiries to help prepare quotations faster and more consistently. The project demonstrates how repetitive administrative processes within a business can be simplified.',
    },
    value: {
      nl: 'Minder handmatig overtypen, minder fouten en offertes die er elke keer hetzelfde uitzien.',
      en: 'Less manual re-typing, fewer mistakes, and quotations that look the same every time.',
    },
    status: 'concept',
    image: null,
    url: null,
    technologies: ['Next.js'],
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
