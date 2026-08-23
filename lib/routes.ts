import type { Locale } from './i18n';
import type { Dictionary, PageMeta } from '@/content/translations';

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
  /* The three supporting pages. They used to be homepage sections; the
     homepage got long enough that they read better as pages of their own. */
  automation: { nl: 'automatisering', en: 'automation' },
  faq: { nl: 'faq', en: 'faq' },
  areas: { nl: 'regio', en: 'areas-we-serve' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeSegments;

/**
 * The supporting pages, in the order they appear in navigation.
 *
 * One list, read by the route, the side rail, the footer and the sitemap, so
 * adding a fourth page is a single edit rather than four.
 */
export const supportingPages = ['automation', 'faq', 'areas'] as const;

export type SupportingPageKey = (typeof supportingPages)[number];

export function isSupportingPageKey(
  key: RouteKey | null
): key is SupportingPageKey {
  return key !== null && (supportingPages as readonly string[]).includes(key);
}

/** Path to a supporting page, e.g. pagePath('nl', 'areas') === '/nl/regio'. */
export function pagePath(locale: Locale, key: SupportingPageKey): string {
  return `/${locale}/${getSegment(key, locale)}`;
}

/** Where each supporting page keeps its own copy. */
export function supportingPageMeta(
  key: SupportingPageKey,
  dict: Dictionary
): PageMeta {
  const byKey: Record<SupportingPageKey, PageMeta> = {
    automation: dict.examples.page,
    faq: dict.faq.page,
    areas: dict.areas.page,
  };
  return byKey[key];
}

/**
 * Href and label for each supporting page, in navigation order.
 *
 * Built on the server and handed to the rail as plain strings. The rail is a
 * client component, and passing it the whole dictionary would serialise every
 * FAQ answer and every town name into the homepage payload - which is most of
 * what moving them off the homepage was meant to avoid.
 */
export function supportingPageLinks(locale: Locale, dict: Dictionary) {
  return supportingPages.map((key) => ({
    key,
    href: pagePath(locale, key),
    label: supportingPageMeta(key, dict).navLabel,
  }));
}

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
