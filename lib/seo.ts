import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';
import { locales, localeHtmlLang, defaultLocale, type Locale } from './i18n';

/**
 * Builds the `alternates` block for a page.
 *
 * Every page declares:
 *   - a canonical URL pointing at itself, so /nl and /en are never treated as
 *     duplicates of each other,
 *   - one hreflang entry per language,
 *   - an x-default pointing at Dutch, the primary language.
 */
export function buildAlternates(pathByLocale: Record<Locale, string>) {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[localeHtmlLang[locale]] = `${siteConfig.url}${pathByLocale[locale]}`;
  }

  languages['x-default'] = `${siteConfig.url}${pathByLocale[defaultLocale]}`;

  return { languages };
}

interface PageMetadataInput {
  locale: Locale;
  title: string;
  description: string;
  /** Title used on social cards, where the site name is added separately. */
  ogTitle?: string;
  /** Path for each language, e.g. { nl: '/nl', en: '/en' }. */
  pathByLocale: Record<Locale, string>;
  /** Set on pages that should not be indexed. */
  noIndex?: boolean;
}

export function buildPageMetadata({
  locale,
  title,
  description,
  ogTitle,
  pathByLocale,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = `${siteConfig.url}${pathByLocale[locale]}`;
  const socialTitle = ogTitle ?? title;

  return {
    title,
    description,
    alternates: {
      canonical,
      ...buildAlternates(pathByLocale),
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      url: canonical,
      locale: localeHtmlLang[locale].replace('-', '_'),
      alternateLocale: locales
        .filter((other) => other !== locale)
        .map((other) => localeHtmlLang[other].replace('-', '_')),
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
