import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { sectionPath } from '@/lib/routes';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
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
      <ul className={styles.grid}>
        {dict.automation.useCases.map((useCase) => (
          <li key={useCase.id} className={styles.card}>
            <h3 className={styles.title}>{useCase.title}</h3>
            <p className={styles.description}>{useCase.description}</p>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <ButtonLink href={sectionPath(locale, dict.contact.id)} size="lg">
          {dict.automation.cta}
        </ButtonLink>
      </div>
    </Section>
  );
}
