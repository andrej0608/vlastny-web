import type { ReactNode } from 'react';
import { Container } from './Container';
import { Reveal } from './Reveal';
import styles from './Section.module.css';

interface SectionProps {
  /** Anchor target for the navigation. Omit for sections without a nav link. */
  id?: string;
  /** Small label above the heading. */
  eyebrow?: string;
  /** Section heading. Rendered as <h2> - the page has exactly one <h1>. */
  heading?: string;
  /** Optional short paragraph under the heading. */
  intro?: string;
  /** Alternating background helps separate sections without extra borders. */
  tone?: 'default' | 'subtle' | 'inverse';
  width?: 'default' | 'narrow';
  /** Centres the heading block. */
  align?: 'start' | 'center';
  /**
   * Draws a hairline above the section. Only needed when two sections share
   * the same background and would otherwise read as one block.
   */
  divider?: boolean;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  heading,
  intro,
  tone = 'default',
  width = 'default',
  align = 'start',
  divider = false,
  children,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      className={[styles.section, styles[tone], divider && styles.divider]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={headingId}
    >
      <Container width={width}>
        {(eyebrow || heading || intro) && (
          <header
            className={[styles.header, align === 'center' && styles.center]
              .filter(Boolean)
              .join(' ')}
          >
            {/* Label, then headline, then supporting text — one step apart, so
                the eye is led down the block rather than meeting all three at
                once. Every section that uses this header inherits the rhythm;
                nothing is repeated per section. */}
            {eyebrow && (
              <Reveal as="p" className={styles.eyebrow}>
                {eyebrow}
              </Reveal>
            )}
            {heading && (
              <Reveal as="h2" id={headingId} className={styles.heading} delay={1}>
                {heading}
              </Reveal>
            )}
            {intro && (
              <Reveal as="p" className={styles.intro} delay={2}>
                {intro}
              </Reveal>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
