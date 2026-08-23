'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { SupportingPageKey } from '@/lib/routes';
import styles from './ExploreNav.module.css';

interface ExploreNavProps {
  links: Array<{ key: SupportingPageKey; href: string; label: string }>;
  /** Text on the compact button, e.g. "Explore". */
  triggerText: string;
  /** Accessible name for the navigation, e.g. "More pages". */
  label: string;
}

/* Drawn on a 24px grid with a 1.6 stroke, matching the icons already on the
   site. Decorative - every link carries its own text. */
const icons = {
  automation: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="15" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 9v6M16.5 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  faq: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.6 9.3a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.7-.9 1.3v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="16.6" r="0.9" fill="currentColor" />
    </svg>
  ),
  areas: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s6.5-5.4 6.5-10a6.5 6.5 0 0 0-13 0c0 4.6 6.5 10 6.5 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10.8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
} as const;

/**
 * Persistent links from the homepage to the three supporting pages.
 *
 * Two shapes, one list of links. On a wide screen a rail sits against the
 * right edge, showing icons at rest and widening to reveal the labels on hover
 * or keyboard focus - collapsed it fits inside the gutter beside the container,
 * so at rest it covers nothing. On a phone it is a small button that opens a
 * short menu above itself.
 *
 * Rendered from the homepage rather than the layout, and deliberately a direct
 * child of it: `position: fixed` resolves against the viewport only while no
 * ancestor carries a filter or a transform. Nothing between here and <body>
 * does. Keep it that way - the mobile drawer learned this the hard way.
 */
export function ExploreNav({ links, triggerText, label }: ExploreNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Escape closes the menu and hands focus back to the button that opened it.
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    /* A tap anywhere else closes it too. Without this the menu would linger
       over the page after the visitor has clearly moved on. */
    function onPointerDown(event: PointerEvent) {
      const node = containerRef.current;
      if (node && !node.contains(event.target as Node)) setIsOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      {/* --- Wide screens: the rail --- */}
      <nav className={styles.rail} aria-label={label}>
        <ul className={styles.railList}>
          {links.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className={styles.railLink}>
                <span className={styles.icon} aria-hidden="true">
                  {icons[link.key]}
                </span>
                <span className={styles.railLabel}>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Phones: a button and a short menu above it --- */}
      <div className={styles.compact}>
        <div
          id={menuId}
          className={[styles.menu, isOpen && styles.menuOpen]
            .filter(Boolean)
            .join(' ')}
          hidden={!isOpen}
        >
          <nav aria-label={label}>
            <ul className={styles.menuList}>
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={styles.menuLink}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={styles.icon} aria-hidden="true">
                      {icons[link.key]}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.triggerIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 8h14M5 12h14M5 16h9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {triggerText}
        </button>
      </div>
    </div>
  );
}
