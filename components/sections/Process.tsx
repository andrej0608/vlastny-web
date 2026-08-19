import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import { RevealGroup } from '@/components/ui/Reveal';
import styles from './Process.module.css';

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id={dict.process.id}
      eyebrow={dict.process.eyebrow}
      heading={dict.process.headline}
      intro={dict.process.intro}
      tone="subtle"
    >
      {/* An ordered list: the steps genuinely happen in sequence. */}
      <RevealGroup as="ol" className={styles.steps}>
        {dict.process.steps.map((step) => (
          <li key={step.number} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {step.number}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </li>
        ))}
      </RevealGroup>
    </Section>
  );
}
