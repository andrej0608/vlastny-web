import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import styles from './Services.module.css';

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id={dict.services.id}
      eyebrow={dict.services.eyebrow}
      heading={dict.services.headline}
      intro={dict.services.intro}
    >
      <ul className={styles.grid}>
        {dict.services.items.map((service) => (
          <li key={service.id} className={styles.card}>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
