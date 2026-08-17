import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { sectionPath } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { HeroFloaters } from './HeroFloaters';
import styles from './Hero.module.css';

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className={styles.hero}>
      {/* Purely decorative; sits behind the copy and takes no pointer events. */}
      <HeroFloaters />

      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {dict.meta.tagline}
          </p>

          {/* The only <h1> on the page. Split across three spans so the
              automation half can carry the accent; the sentence itself is
              unchanged. */}
          <h1 className={styles.headline}>
            {dict.hero.headlineLead}
            <span className={styles.headlineAccent}>
              {dict.hero.headlineAccent}
            </span>
            {dict.hero.headlineTail}
          </h1>

          <p className={styles.supporting}>{dict.hero.supporting}</p>

          <div className={styles.actions}>
            {/* Primary action is starting a conversation; the portfolio is
                the supporting step for visitors who want proof first. */}
            <ButtonLink href={sectionPath(locale, dict.contact.id)} size="lg">
              {dict.hero.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={sectionPath(locale, dict.work.id)}
              variant="secondary"
              size="lg"
            >
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>

          <ul className={styles.points}>
            {dict.hero.points.map((point) => (
              <li key={point} className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                    <path
                      d="M4 10.5 8 14.5 16 5.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
