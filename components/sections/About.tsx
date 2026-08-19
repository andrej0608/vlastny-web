import Image from 'next/image';
import type { Dictionary } from '@/content/translations';
import { siteConfig } from '@/content/site';
import { portraitImage } from '@/content/portrait';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import styles from './About.module.css';

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id={dict.about.id} tone="subtle">
      <div className={styles.layout}>
        {/* Portrait first in the markup so it appears above the text on
            mobile: the face lands before the story rather than after it. */}
        <Reveal className={styles.portraitColumn} direction="left">
          <figure className={styles.frame}>
            <Image
              src={portraitImage.src}
              alt={portraitImage.alt}
              width={portraitImage.width}
              height={portraitImage.height}
              className={styles.portrait}
              sizes="(min-width: 60rem) 26rem, (min-width: 40rem) 22rem, 80vw"
            />
          </figure>

          <p className={styles.caption}>
            <span className={styles.captionName}>{siteConfig.name}</span>
            <span className={styles.captionRole}>{dict.meta.tagline}</span>
          </p>
        </Reveal>

        <Reveal className={styles.textColumn} direction="right" delay={1}>
          <p className={styles.eyebrow}>{dict.about.eyebrow}</p>
          <h2 className={styles.headline}>{dict.about.headline}</h2>

          <div className={styles.prose}>
            {dict.about.paragraphs.map((paragraph, index) => (
              // Paragraph order is fixed and defined in the content file, so
              // the index is a stable key here.
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
