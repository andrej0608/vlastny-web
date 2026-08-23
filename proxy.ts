import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, locales } from '@/lib/i18n';

/**
 * Every public page lives under /nl or /en. This runs before routing and only
 * handles URLs that carry no language prefix yet - in practice, the bare
 * domain.
 *
 * The bare domain always opens in Dutch. Not the browser's preferred language,
 * not whatever was chosen last time: Dutch is the language this business sells
 * in, and a Belgian customer whose laptop happens to be set to English should
 * still land on the Dutch site. English is not hidden - /en works whenever it
 * is asked for, and the language switcher moves between the two - it is simply
 * never chosen on the visitor's behalf.
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

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;

  /* Temporary rather than permanent. A 308 is cached by the browser more or
     less forever, which would make ever revisiting this decision painful for
     everyone who had already visited once. */
  return NextResponse.redirect(url);
}

export const config = {
  /**
   * Skip Next internals, Vercel's own endpoints, the API routes, and any
   * path with a file extension (sitemap.xml, robots.txt, favicons, images).
   *
   * `_vercel` earns its place here: the analytics beacon posts to
   * /_vercel/insights/event, which carries no file extension and no language
   * prefix. Without the exclusion this proxy would redirect it to
   * /nl/_vercel/insights/event and every page view would be lost.
   */
  matcher: ['/((?!_next|_vercel|api|.*\\..*).*)'],
};
