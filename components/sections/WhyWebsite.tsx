import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import styles from './WhyWebsite.module.css';

export function WhyWebsite({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="subtle">
      <div className={styles.layout}>
        <Reveal className={styles.intro}>
          <p className={styles.eyebrow}>{dict.whyWebsite.eyebrow}</p>
          <h2 className={styles.headline}>{dict.whyWebsite.headline}</h2>
          <p className={styles.text}>{dict.whyWebsite.text}</p>
        </Reveal>

        {/* Each benefit names an outcome and then explains it, rather than
            listing a feature on its own. */}
        <RevealGroup as="ul" className={styles.benefits}>
          {dict.whyWebsite.benefits.map((benefit) => (
            <li key={benefit.title} className={styles.benefit}>
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
              <div className={styles.benefitBody}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitText}>{benefit.description}</p>
              </div>
            </li>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
