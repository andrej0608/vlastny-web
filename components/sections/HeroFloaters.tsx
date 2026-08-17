'use client';

import { useEffect, useRef, type ReactElement } from 'react';
import styles from './HeroFloaters.module.css';

/**
 * Decorative objects drifting behind the hero copy.
 *
 * Motion design
 * -------------
 * Each object rides two independent oscillations: the outer element moves on
 * the X axis, the inner one on the Y axis, each with its own duration. Because
 * the two periods do not divide evenly, the combined path is a slowly
 * precessing ellipse rather than a repeating bob — no two objects ever line up
 * the way a shared up-and-down animation would.
 *
 * On top of that, a pointer parallax shifts the whole field by a few pixels,
 * scaled per object by its `--depth` so nearer objects travel further.
 *
 * Cost
 * ----
 * The drift is pure CSS on compositor-friendly properties. The only JavaScript
 * is one pointer listener that writes two custom properties on the container,
 * batched into a single animation frame — no per-object state, no re-renders,
 * and nothing at all on touch devices or when reduced motion is requested.
 *
 * The whole field is aria-hidden: it carries no information.
 */

interface Floater {
  id: string;
  icon: ReactElement;
  /** Position as percentages of the hero box, on wide screens. */
  top: string;
  left: string;
  /**
   * Position below the tablet breakpoint.
   *
   * On a narrow screen the copy fills the hero almost entirely, so there is no
   * free column to drift in. The two objects that remain are anchored to the
   * hero's bottom padding instead — a genuinely empty band — measured up from
   * the bottom edge rather than down from the top.
   */
  mobileBottom?: string;
  mobileLeft?: string;
  /** Rendered size in pixels. */
  size: number;
  /** Seconds; deliberately co-prime-ish so paths do not resynchronise. */
  durationX: number;
  durationY: number;
  /** Pixels of travel on each axis. */
  amplitudeX: number;
  amplitudeY: number;
  /** Parallax multiplier, 0 = static, 1 = full travel. */
  depth: number;
  delay: number;
  /** Hidden below the tablet breakpoint to keep small screens calm. */
  hideOnMobile?: boolean;
}

/* Icons are drawn at a 24px grid and inherit colour from the tile. */
const icons = {
  browser: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="6.25" r="0.7" fill="currentColor" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.75 18.5h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="3" width="6" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="15.5" y="16" width="6" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="15.5" y="3" width="6" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 5.5h7M18.5 8v8M15.5 18.5h-7a3 3 0 0 1-3-3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 2.75h7.5L19 8.25V21A1.25 1.25 0 0 1 17.75 22H6A1.25 1.25 0 0 1 4.75 21V4A1.25 1.25 0 0 1 6 2.75Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13.25 3v5.25H18.5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 5.5A1.5 1.5 0 0 1 5 4h14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 16H9l-4.5 4v-4H5a1.5 1.5 0 0 1-1.5-1.5v-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.6-5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 3.5V8h-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18.5 16.5 19.2 18.6l2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z" fill="currentColor" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

/*
 * Every `left` is 76% or more.
 *
 * The headline — not the paragraph — is the widest piece of copy: it inherits
 * the 52rem content cap, and its right edge lands at roughly 70% of the
 * viewport once the container reaches its 72rem maximum. 76% clears that with
 * enough margin for the drift amplitude on top.
 *
 * Below 1280px the headline reaches past 80% of the width and there is no free
 * column at all, which is why the field collapses to two objects tucked into
 * the hero's bottom padding instead of trying to squeeze in beside the text.
 *
 * Sizes and depths vary so the field reads as having front and back layers.
 */
const floaters: Floater[] = [
  { id: 'browser',  icon: icons.browser,  top: '12%', left: '78%', size: 62, durationX: 23, durationY: 17, amplitudeX: 16, amplitudeY: 22, depth: 0.9,  delay: 0,   mobileBottom: '10px', mobileLeft: '8%' },
  { id: 'workflow', icon: icons.workflow, top: '48%', left: '86%', size: 70, durationX: 29, durationY: 21, amplitudeX: 20, amplitudeY: 15, depth: 1,    delay: -4,  mobileBottom: '10px', mobileLeft: '74%' },
  { id: 'document', icon: icons.document, top: '76%', left: '77%', size: 54, durationX: 19, durationY: 27, amplitudeX: 13, amplitudeY: 18, depth: 0.7,  delay: -9,  hideOnMobile: true },
  { id: 'sparkle',  icon: icons.sparkle,  top: '26%', left: '93%', size: 48, durationX: 26, durationY: 19, amplitudeX: 11, amplitudeY: 20, depth: 0.55, delay: -13, hideOnMobile: true },
  { id: 'message',  icon: icons.message,  top: '84%', left: '90%', size: 46, durationX: 31, durationY: 23, amplitudeX: 15, amplitudeY: 13, depth: 0.8,  delay: -6,  hideOnMobile: true },
  { id: 'mobile',   icon: icons.mobile,   top: '4%',  left: '89%', size: 44, durationX: 21, durationY: 29, amplitudeX: 12, amplitudeY: 16, depth: 0.45, delay: -17, hideOnMobile: true },
  { id: 'refresh',  icon: icons.refresh,  top: '40%', left: '81%', size: 40, durationX: 33, durationY: 25, amplitudeX: 10, amplitudeY: 14, depth: 0.35, delay: -2,  hideOnMobile: true },
  { id: 'gear',     icon: icons.gear,     top: '92%', left: '84%', size: 38, durationX: 27, durationY: 31, amplitudeX: 14, amplitudeY: 11, depth: 0.6,  delay: -21, hideOnMobile: true },
];

export function HeroFloaters() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    // A pointer that cannot hover is a touch screen: no cursor to follow.
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || calm.matches) return;

    let frame = 0;
    let pending: { x: number; y: number } | null = null;

    function apply() {
      frame = 0;
      if (!pending || !field) return;
      field.style.setProperty('--pointer-x', pending.x.toFixed(3));
      field.style.setProperty('--pointer-y', pending.y.toFixed(3));
    }

    function onPointerMove(event: PointerEvent) {
      // Normalised to roughly -1..1 from the centre of the viewport.
      pending = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };
      // One write per frame no matter how fast the pointer moves.
      if (!frame) frame = requestAnimationFrame(apply);
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={fieldRef} className={styles.field} aria-hidden="true">
      {floaters.map((floater) => (
        <div
          key={floater.id}
          className={[styles.orbit, floater.hideOnMobile && styles.desktopOnly]
            .filter(Boolean)
            .join(' ')}
          style={
            {
              '--top': floater.top,
              '--left': floater.left,
              '--bottom-mobile': floater.mobileBottom ?? 'auto',
              '--left-mobile': floater.mobileLeft ?? floater.left,
              '--duration-x': `${floater.durationX}s`,
              '--duration-y': `${floater.durationY}s`,
              '--amplitude-x': `${floater.amplitudeX}px`,
              '--amplitude-y': `${floater.amplitudeY}px`,
              '--depth': floater.depth,
              '--delay': `${floater.delay}s`,
            } as React.CSSProperties
          }
        >
          <div className={styles.bob}>
            <div
              className={styles.tile}
              style={{ '--size': `${floater.size}px` } as React.CSSProperties}
            >
              {floater.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
