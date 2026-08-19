import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Areas.module.css';

/**
 * Lists the regions served. The wording describes where clients are, not where
 * offices are - there is only one location, and it appears in Contact.
 */
export function Areas({ dict }: { dict: Dictionary }) {
  return (
    <Section
      tone="subtle"
      eyebrow={dict.areas.eyebrow}
      heading={dict.areas.headline}
      intro={dict.areas.text}
    >
      <Reveal as="ul" className={styles.locations}>
        {dict.areas.locations.map((location) => (
          <li key={location} className={styles.location}>
            {location}
          </li>
        ))}
        <li className={styles.surrounding}>{dict.areas.surrounding}</li>
      </Reveal>
    </Section>
  );
}
