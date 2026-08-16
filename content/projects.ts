import type { Locale } from '@/lib/i18n';

/**
 * PORTFOLIO PROJECTS
 * ------------------------------------------------------------------
 * To add a project, append an entry to the `projects` array below.
 * Nothing else needs to change - the Work section and the optional detail
 * pages both read from this file.
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

  /** One or two sentences, per language. */
  description: Record<Locale, string>;

  /** Business category, e.g. "Restaurant", per language. */
  type: Record<Locale, string>;

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
    slug: 'garage-demo',
    name: 'Garage & autoservice — conceptontwerp',
    description: {
      nl: 'Conceptwebsite voor een lokaal autobedrijf, met duidelijke presentatie van diensten, openingstijden en een eenvoudige weg naar een afspraakaanvraag.',
      en: 'Concept website for a local automotive business, with a clear presentation of services, opening hours and a simple path to requesting an appointment.',
    },
    type: { nl: 'Automotive', en: 'Automotive' },
    status: 'concept',
    image: null,
    url: null,
    technologies: ['Next.js'],
    order: 1,
  },
  {
    slug: 'restaurant-demo',
    name: 'Restaurant — conceptontwerp',
    description: {
      nl: 'Conceptwebsite voor een restaurant met menukaart, openingstijden, routebeschrijving en directe contactmogelijkheden vanaf de telefoon.',
      en: 'Concept website for a restaurant with a menu, opening hours, directions and direct ways to get in touch straight from a phone.',
    },
    type: { nl: 'Horeca', en: 'Hospitality' },
    status: 'concept',
    image: null,
    url: null,
    technologies: ['Next.js'],
    order: 2,
  },
  {
    slug: 'bouwbedrijf-demo',
    name: 'Bouwbedrijf — conceptontwerp',
    description: {
      nl: 'Conceptwebsite voor een bouw- en renovatiebedrijf, met een overzicht van werkzaamheden, uitgevoerde projecten en een aanvraagformulier voor offertes.',
      en: 'Concept website for a construction and renovation company, showing the type of work carried out, completed projects and a quotation request form.',
    },
    type: { nl: 'Bouw', en: 'Construction' },
    status: 'concept',
    image: null,
    url: null,
    technologies: ['Next.js'],
    order: 3,
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
