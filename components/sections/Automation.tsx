import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { pagePath, sectionPath } from '@/lib/routes';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import styles from './Automation.module.css';

interface AutomationProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Business automation, given its own section rather than a single service card.
 *
 * The examples stay deliberately concrete but non-committal: they describe what
 * kinds of work can be simplified, without claiming any specific result for a
 * business whose processes have not been seen yet.
 */
export function Automation({ locale, dict }: AutomationProps) {
  return (
    <Section
      id={dict.automation.id}
      eyebrow={dict.automation.eyebrow}
      heading={dict.automation.headline}
      intro={dict.automation.intro}
    >
      <RevealGroup as="ul" className={styles.grid}>
        {dict.automation.useCases.map((useCase) => (
          <li key={useCase.id} className={styles.card}>
            <h3 className={styles.title}>{useCase.title}</h3>
            <p className={styles.description}>{useCase.description}</p>
          </li>
        ))}
      </RevealGroup>

      <Reveal className={styles.actions} delay={1}>
        <ButtonLink href={sectionPath(locale, dict.contact.id)} size="lg">
          {dict.automation.cta}
        </ButtonLink>

        {/* The worked examples moved to their own page; this is the way in
            from the section that introduces them. */}
        <Link href={pagePath(locale, 'automation')} className={styles.moreLink}>
          {dict.automation.examplesLink} →
        </Link>
      </Reveal>
    </Section>
  );
}
