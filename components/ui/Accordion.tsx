import styles from './Accordion.module.css';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /**
   * Groups the items so opening one closes the others.
   * Must be unique if more than one accordion ever appears on a page.
   */
  name?: string;
}

/**
 * Built on native <details>/<summary>.
 *
 * This is deliberate: it is keyboard accessible and screen-reader friendly out
 * of the box, it needs no JavaScript, and the answers are present in the HTML
 * so search engines index them.
 */
export function Accordion({ items, name = 'faq' }: AccordionProps) {
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <details key={item.id} name={name} className={styles.item}>
          <summary className={styles.summary}>
            <span className={styles.question}>{item.question}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <div className={styles.answer}>
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
