import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { locales, localeHtmlLang, defaultLocale } from '@/lib/i18n';
import { getSegment, privacyPath } from '@/lib/routes';
import { getProjectsWithDetail } from '@/content/projects';

/**
 * Sitemap.
 *
 * Each URL carries its own hreflang alternates, so search engines see /nl and
 * /en as two language versions of one page rather than duplicate content.
 * New project detail pages appear here automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /** Turns a per-language path map into the `alternates` shape Next expects. */
  function alternates(pathByLocale: Record<string, string>) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[localeHtmlLang[locale]] =
        `${siteConfig.url}${pathByLocale[locale]}`;
    }
    languages['x-default'] = `${siteConfig.url}${pathByLocale[defaultLocale]}`;
    return { languages };
  }

  const homepages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: alternates({ nl: '/nl', en: '/en' }),
  }));

  /* Legal pages are indexable and internally linked, but carry a low priority:
     they exist for visitors who look for them, not to rank. */
  const privacyPages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteConfig.url}${privacyPath(locale)}`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.3,
    alternates: alternates({
      nl: privacyPath('nl'),
      en: privacyPath('en'),
    }),
  }));

  const projectPages: MetadataRoute.Sitemap = getProjectsWithDetail().flatMap(
    (project) => {
      const pathByLocale = Object.fromEntries(
        locales.map((locale) => [
          locale,
          `/${locale}/${getSegment('work', locale)}/${project.slug}`,
        ])
      );

      return locales.map((locale) => ({
        url: `${siteConfig.url}${pathByLocale[locale]}`,
        lastModified,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
        alternates: alternates(pathByLocale),
      }));
    }
  );

  return [...homepages, ...privacyPages, ...projectPages];
}
