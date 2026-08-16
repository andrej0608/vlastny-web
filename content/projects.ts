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
}

/** Optional long-form content for a project detail page. */
export interface ProjectDetail {
  /** One entry per paragraph, per language. */
  paragraphs: Record<Locale, string[]>;
  /** Optional bullet list of what was delivered. */
  highlights?: Record<Locale, string[]>;
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
    // No screenshot configured yet - the card shows a neutral placeholder.
    image: null,
    // Not published, so no link is shown. Never point this at someone
    // else's website.
    url: null,
    technologies: ['Next.js'],
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
