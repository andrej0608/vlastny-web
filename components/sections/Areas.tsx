import type { Dictionary } from '@/content/translations';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Areas.module.css';

/**
 * The regions served, grouped by area rather than listed as one long run of
 * town names.
 *
 * The wording throughout describes where clients are, not where offices are:
 * there is one location and it appears in Contact. A town appearing here means
 * work is done for businesses there, nothing more.
 */
export function AreaGroups({ dict }: { dict: Dictionary }) {
  return (
    <div className={styles.groups}>
      {dict.areas.groups.map((group, index) => (
        <Reveal key={group.title} className={styles.group} delay={index}>
          <h2 className={styles.groupTitle}>{group.title}</h2>
          <ul className={styles.locations}>
            {group.locations.map((location) => (
              <li key={location} className={styles.location}>
                {location}
              </li>
            ))}
            <li className={styles.surrounding}>{dict.areas.surrounding}</li>
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
