'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { siteConfig } from '@/content/site';
import { homePath, sectionPath } from '@/lib/routes';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './Header.module.css';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Every link inside the menu closes it through `close` below, so there is no
  // need to watch the pathname for changes.

  // Escape closes the menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Prevent the page behind the open mobile menu from scrolling.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* Language selector sits first, in the top-left of the navigation. */}
          <LanguageSwitcher
            currentLocale={locale}
            label={dict.common.languageSwitcherLabel}
            onSelect={close}
          />

          <Link href={homePath(locale)} className={styles.brand} onClick={close}>
            <span className={styles.brandName}>{siteConfig.name}</span>
            <span className={styles.brandTagline}>{dict.meta.tagline}</span>
          </Link>

          <nav className={styles.desktopNav} aria-label={dict.common.menu}>
            <ul className={styles.navList}>
              {dict.nav.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={sectionPath(locale, item.id)}
                    className={styles.navLink}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={sectionPath(locale, dict.contact.id)}
            className={styles.headerCta}
          >
            {dict.nav.cta}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? dict.common.closeMenu : dict.common.openMenu}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span
              className={[styles.menuIcon, isOpen && styles.menuIconOpen]
                .filter(Boolean)
                .join(' ')}
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      {/*
        Mobile menu. Kept in the DOM but hidden, so the toggle's aria-controls
        always points at a real element.

        Deliberately a SIBLING of <header>, never a child. The header carries
        `backdrop-filter`, and any element with a backdrop-filter becomes the
        containing block for its `position: fixed` descendants — which sized
        this drawer against the 72px header instead of the viewport and
        collapsed it to an invisible sliver. Kept outside, it resolves against
        the viewport as intended. Nothing between here and <body> establishes a
        containing block or a stacking context, so the drawer covers the page.
      */}
      <div
        id={menuId}
        className={[styles.mobileNav, isOpen && styles.mobileNavOpen]
          .filter(Boolean)
          .join(' ')}
        hidden={!isOpen}
      >
        <nav aria-label={dict.common.menu}>
          <ul className={styles.mobileList}>
            {dict.nav.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={sectionPath(locale, item.id)}
                  className={styles.mobileLink}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={sectionPath(locale, dict.contact.id)}
          className={styles.mobileCta}
          onClick={close}
        >
          {dict.nav.cta}
        </Link>
      </div>
    </>
  );
}
