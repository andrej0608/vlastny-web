'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import styles from './Reveal.module.css';

/**
 * Scroll reveal.
 *
 * Follows the pattern the adoption chart already uses: one IntersectionObserver
 * per element, a class toggled directly on the node, and the observer
 * disconnected the moment it fires. Toggling the class rather than holding
 * state keeps the reveal what it is - a one-way visual side effect - instead of
 * re-rendering a whole section's worth of markup for it.
 *
 * Both components render an element you choose, with your own class on it, so a
 * card stays the same `<li>` in the same grid it was before. Nothing is
 * wrapped and no markup is added.
 */

/**
 * The elements a reveal may become. A deliberately short list: it exists to
 * take over an element a section already has, not to introduce new ones.
 */
type RevealTag =
  | 'div'
  | 'p'
  | 'h2'
  | 'li'
  | 'ul'
  | 'ol'
  | 'header'
  | 'figure';

interface RevealBaseProps {
  children: ReactNode;
  as?: RevealTag;
  className?: string;
  id?: string;
}

interface RevealProps extends RevealBaseProps {
  /**
   * Position in the sequence - a step, not milliseconds. 0 arrives first, 1 one
   * step behind it, and so on. The length of a step is a token, so the whole
   * page shares one rhythm and a phone can tighten it without any component
   * knowing.
   */
  delay?: number;
  /** Only worth changing where two neighbouring blocks should differ. */
  direction?: 'up' | 'left' | 'right';
}

/**
 * Watches a node and reveals it once.
 *
 * Returns a cleanup that disconnects, so a node removed mid-scroll takes its
 * observer with it.
 */
function useRevealOnce(
  ref: React.RefObject<HTMLElement | null>,
  visibleClass: string
) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.classList.add(visibleClass);

    /* Without an observer there is no way to know when to reveal, so the
       content is shown at once. Never leave it hidden. */
    if (!('IntersectionObserver' in window)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          // Once per visit. Scrolling back up never replays it.
          observer.disconnect();
        }
      },
      /*
       * A hair inside the bottom edge, so the movement is seen rather than
       * finishing below the fold. Kept small on purpose: a larger inset can
       * strand an element that never rises far enough up the viewport, and a
       * missed reveal means content nobody can read.
       */
      { rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, visibleClass]);
}

/** A single element, revealed on its own. */
export function Reveal({
  children,
  delay = 0,
  as = 'div',
  direction = 'up',
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnce(ref, styles.visible);

  /* Every tag in RevealTag is an HTMLElement, and none of them is given props
     the others lack. Naming one of them keeps the ref concretely typed without
     a generic that would have to be spelled out at every call site. */
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      id={id}
      className={[
        styles.reveal,
        direction === 'left' && styles.fromLeft,
        direction === 'right' && styles.fromRight,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        delay ? ({ '--reveal-index': delay } as CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}

/**
 * A container whose direct children are revealed one after another.
 *
 * One observer for the whole group rather than one per card: the cards arrive
 * as a set, which is what makes the stagger read as a single movement instead
 * of a row of separate ones. The children need no props - their position in
 * the group is what times them.
 */
export function RevealGroup({
  children,
  as = 'div',
  className,
  id,
}: RevealBaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnce(ref, styles.groupVisible);

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      id={id}
      className={[styles.group, className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  );
}
