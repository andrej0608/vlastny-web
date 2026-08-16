import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import styles from './About.module.css';

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id={dict.about.id} width="narrow">
      <p className={styles.eyebrow}>{dict.about.eyebrow}</p>
      <h2 className={styles.headline}>{dict.about.headline}</h2>

      <div className={styles.prose}>
        {dict.about.paragraphs.map((paragraph, index) => (
          // Paragraph order is fixed and defined in the content file, so the
          // index is a stable key here.
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
