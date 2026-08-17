import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import styles from './Examples.module.css';

/**
 * Worked examples, each told as problem -> solution -> result.
 *
 * The three blocks are a description list rather than three paragraphs: the
 * labels genuinely are terms and the text genuinely is their description, so a
 * screen reader announces the structure instead of a wall of prose.
 */
export function Examples({ dict }: { dict: Dictionary }) {
  const t = dict.examples;

  return (
    <Section
      id={t.id}
      eyebrow={t.eyebrow}
      heading={t.headline}
      intro={t.intro}
    >
      <ul className={styles.grid}>
        {t.items.map((example) => (
          <li key={example.id} className={styles.card}>
            <h3 className={styles.title}>{example.title}</h3>

            <dl className={styles.flow}>
              <div className={styles.step}>
                <dt className={styles.label}>{t.labels.problem}</dt>
                <dd className={styles.text}>{example.problem}</dd>
              </div>

              <div className={styles.step}>
                <dt className={styles.label}>{t.labels.solution}</dt>
                <dd className={styles.text}>{example.solution}</dd>
              </div>

              <div className={[styles.step, styles.resultStep].join(' ')}>
                <dt className={[styles.label, styles.resultLabel].join(' ')}>
                  {t.labels.result}
                </dt>
                <dd className={[styles.text, styles.resultText].join(' ')}>
                  {example.result}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </Section>
  );
}
