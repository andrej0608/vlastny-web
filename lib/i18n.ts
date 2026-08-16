/**
 * Core of the multilingual system.
 *
 * Adding a third language later means:
 *   1. add its code to `locales` below,
 *   2. create `content/translations/<code>.ts` implementing the `Dictionary`
 *      interface (TypeScript will list every missing key for you),
 *   3. register it in `content/translations/index.ts`,
 *   4. add its per-locale fields to the entries in `content/projects.ts`.
 * No component needs to change.
 */

export const locales = ['nl', 'en'] as const;

export type Locale = (typeof locales)[number];

/** Dutch is the primary language of the site. */
export const defaultLocale: Locale = 'nl';

/** Full BCP 47 tags, used for the <html lang> attribute and hreflang values. */
export const localeHtmlLang: Record<Locale, string> = {
  nl: 'nl-BE',
  en: 'en',
};

/** How each language is presented in the language switcher. */
export const localeLabels: Record<Locale, { flag: string; label: string; name: string }> = {
  nl: { flag: '🇳🇱', label: 'NL', name: 'Nederlands' },
  en: { flag: '🇬🇧', label: 'EN', name: 'English' },
};

/** Cookie that remembers the visitor's language choice between visits. */
export const LOCALE_COOKIE = 'NEXT_LOCALE';
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // one year

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/**
 * Picks the best language for a visitor who lands on `/` without a cookie.
 * Dutch wins unless the browser clearly prefers English.
 */
export function resolveLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith('q='))
        ?.slice(2);
      return { tag: tag.trim().toLowerCase(), quality: q ? Number(q) : 1 };
    })
    .filter((entry) => entry.tag.length > 0 && !Number.isNaN(entry.quality))
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}
