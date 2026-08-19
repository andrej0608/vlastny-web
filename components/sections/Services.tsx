import Image from 'next/image';
import type { Dictionary } from '@/content/translations';
import { serviceImages } from '@/content/service-images';
import { Section } from '@/components/ui/Section';
import { RevealGroup } from '@/components/ui/Reveal';
import styles from './Services.module.css';

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id={dict.services.id}
      eyebrow={dict.services.eyebrow}
      heading={dict.services.headline}
      intro={dict.services.intro}
    >
      <RevealGroup as="ul" className={styles.grid}>
        {dict.services.items.map((service, index) => {
          const image = serviceImages[service.id];

          return (
            <li key={service.id} className={styles.card}>
              {image && (
                <div className={styles.media}>
                  <Image
                    src={image.src}
                    alt={service.imageAlt}
                    width={image.width}
                    height={image.height}
                    className={styles.image}
                    sizes="(min-width: 64rem) 34rem, (min-width: 40rem) 45vw, 100vw"
                    /* The first two cards are near the fold on a laptop. */
                    priority={index < 2}
                  />
                </div>
              )}

              <div className={styles.body}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </li>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
