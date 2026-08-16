import type { Locale } from './i18n';

/**
 * Localised URL segments.
 *
 * The homepage lives at /nl and /en. Sections on it are reached by anchor
 * (/nl#diensten, /en#services), which is why the nav ids differ per language.
 *
 * Sub-pages use a localised segment so Dutch visitors get Dutch URLs:
 *   /nl/werk/<slug>   and   /en/work/<slug>
 */
export const routeSegments = {
  work: { nl: 'werk', en: 'work' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeSegments;

/** The localised segment for a route key, e.g. workSegment('nl') === 'werk'. */
export function getSegment(key: RouteKey, locale: Locale): string {
  return routeSegments[key][locale];
}

/** Reverse lookup: which route key does this segment belong to in this locale? */
export function getRouteKeyFromSegment(
  segment: string,
  locale: Locale
): RouteKey | null {
  const entry = (Object.keys(routeSegments) as RouteKey[]).find(
    (key) => routeSegments[key][locale] === segment
  );
  return entry ?? null;
}

/** Homepage path for a locale. */
export function homePath(locale: Locale): string {
  return `/${locale}`;
}

/** Anchor link to a section on the homepage. */
export function sectionPath(locale: Locale, sectionId: string): string {
  return `/${locale}#${sectionId}`;
}

/** Detail page path for a portfolio project. */
export function projectPath(locale: Locale, slug: string): string {
  return `/${locale}/${getSegment('work', locale)}/${slug}`;
}

/**
 * Privacy notice path.
 *
 * "privacy" reads naturally in both languages and is widely understood, so it
 * stays the same segment in each — /nl/privacy and /en/privacy.
 */
export function privacyPath(locale: Locale): string {
  return `/${locale}/privacy`;
}

/**
 * Translates the current pathname into another locale, so the language
 * switcher keeps the visitor on the same page instead of dumping them home.
 */
export function translatePath(
  pathname: string,
  from: Locale,
  to: Locale
): string {
  const parts = pathname.split('/').filter(Boolean);

  // ['nl'] -> ['en']
  if (parts.length === 0) return `/${to}`;
  parts[0] = to;

  // ['en', 'work', 'slug'] -> ['nl', 'werk', 'slug']
  if (parts.length >= 2) {
    const key = getRouteKeyFromSegment(parts[1], from);
    if (key) parts[1] = getSegment(key, to);
  }

  return `/${parts.join('/')}`;
}
