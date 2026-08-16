import type { Locale } from '@/lib/i18n';
import type { Dictionary } from './dictionary';
import { nl } from './nl';
import { en } from './en';

/** Register every language file here. */
const dictionaries: Record<Locale, Dictionary> = { nl, en };

/**
 * Returns all text for a language. Components receive this object and never
 * import a specific language file directly, which is why there is only one
 * set of components rather than one per language.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from './dictionary';
export type { NavItem, ServiceItem, ProcessStep, FaqItem } from './dictionary';
