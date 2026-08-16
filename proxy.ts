import { NextResponse, type NextRequest } from 'next/server';
import {
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  isLocale,
  locales,
  resolveLocaleFromAcceptLanguage,
} from '@/lib/i18n';

/**
 * Every public page lives under /nl or /en. This runs before routing and only
 * handles URLs that have no language prefix yet - typically the bare domain.
 *
 * Language choice is remembered in a cookie, so a returning visitor who typed
 * the bare domain lands back in the language they picked last time.
 *
 * (In Next.js 16 this file convention is called `proxy`; it replaced the
 * older `middleware` name.)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : resolveLocaleFromAcceptLanguage(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  // A temporary redirect, not a permanent one: the target depends on the
  // visitor's cookie and browser language, so it must not be cached forever.
  const response = NextResponse.redirect(url);

  if (!isLocale(cookieLocale)) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: '/',
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  /**
   * Skip Next internals, the API routes, and any path with a file extension
   * (sitemap.xml, robots.txt, favicons, images).
   */
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
