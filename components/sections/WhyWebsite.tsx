import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import styles from './WhyWebsite.module.css';

export function WhyWebsite({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="subtle">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{dict.whyWebsite.eyebrow}</p>
          <h2 className={styles.headline}>{dict.whyWebsite.headline}</h2>
          <p className={styles.text}>{dict.whyWebsite.text}</p>
        </div>

        <ul className={styles.benefits}>
          {dict.whyWebsite.benefits.map((benefit) => (
            <li key={benefit} className={styles.benefit}>
              <span className={styles.check} aria-hidden="true">
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                  <path
                    d="M4 10.5 8 14.5 16 5.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
