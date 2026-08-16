import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { sectionPath } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import styles from './Hero.module.css';

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          {/* The only <h1> on the page. */}
          <h1 className={styles.headline}>{dict.hero.headline}</h1>
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
        </div>
      </Container>
    </section>
  );
}
