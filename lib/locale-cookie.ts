import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from './i18n';

/**
 * Remembers the visitor's language choice in the browser.
 *
 * Read back by `proxy.ts` when someone arrives at the bare domain, so a
 * returning visitor lands in the language they last picked.
 *
 * Kept out of the component file because writing to `document` is a side
 * effect on an external system, not component state.
 */
export function rememberLocale(locale: Locale): void {
  if (typeof document === 'undefined') return;

  document.cookie = [
    `${LOCALE_COOKIE}=${locale}`,
    'path=/',
    `max-age=${LOCALE_COOKIE_MAX_AGE}`,
    'samesite=lax',
  ].join(';');
}
