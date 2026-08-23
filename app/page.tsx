import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { homePath } from '@/lib/routes';

/**
 * The bare domain, sent to Dutch.
 *
 * In practice `proxy.ts` gets there first - it runs before routing, so a
 * request for `/` is redirected before any page is reached and this component
 * never renders. It exists as the floor under that: if the proxy is ever
 * removed, or its matcher stops covering `/`, the root still resolves to Dutch
 * instead of falling through to a 404.
 *
 * Deliberately unconditional. No browser language, no cookie, no stored
 * preference - the choice is not the visitor's browser's to make. English is
 * always available at /en and the language switcher moves between the two.
 */
export default function RootPage() {
  redirect(homePath(defaultLocale));
}
