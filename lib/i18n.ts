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

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
