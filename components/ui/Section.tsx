import type { ReactNode } from 'react';
import { Container } from './Container';
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
  children,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      className={[styles.section, styles[tone]].join(' ')}
      aria-labelledby={headingId}
    >
      <Container width={width}>
        {(eyebrow || heading || intro) && (
          <header
            className={[styles.header, align === 'center' && styles.center]
              .filter(Boolean)
              .join(' ')}
          >
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {heading && (
              <h2 id={headingId} className={styles.heading}>
                {heading}
              </h2>
            )}
            {intro && <p className={styles.intro}>{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
