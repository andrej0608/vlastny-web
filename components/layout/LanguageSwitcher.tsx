'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale, locales, localeLabels } from '@/lib/i18n';
import { translatePath } from '@/lib/routes';
import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  /** `inline` is used in the footer, where the switcher is secondary. */
  variant?: 'header' | 'inline';
  /** Called after a language is picked - used to close the mobile menu. */
  onSelect?: () => void;
}

/**
 * Renders a real link per language rather than a JavaScript-driven toggle.
 * Search engines can follow both, and the visitor lands on the equivalent page
 * in the other language instead of being sent back to the homepage.
 *
 * Choosing a language stores nothing. It changes the address, and the address
 * is the whole of it - the bare domain always opens in Dutch, however many
 * times someone has picked English before.
 */
export function LanguageSwitcher({
  currentLocale,
  label,
  variant = 'header',
  onSelect,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav
      className={[styles.switcher, styles[variant]].join(' ')}
      aria-label={label}
    >
      <ul className={styles.list}>
        {locales.map((locale) => {
          const isCurrent = locale === currentLocale;
          const { flag, label: short, name } = localeLabels[locale];

          return (
            <li key={locale}>
              <Link
                href={translatePath(pathname, currentLocale, locale)}
                hrefLang={locale}
                lang={locale}
                className={[styles.option, isCurrent && styles.active]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={isCurrent ? 'true' : undefined}
                onClick={onSelect}
              >
                <span className={styles.flag} aria-hidden="true">
                  {flag}
                </span>
                <span className={styles.code}>{short}</span>
                <span className="visually-hidden">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
