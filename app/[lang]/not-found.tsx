import Link from 'next/link';
import { getDictionary } from '@/content/translations';
import { defaultLocale } from '@/lib/i18n';
import { Container } from '@/components/ui/Container';
import styles from './not-found.module.css';

/**
 * Shown for unknown URLs under a language prefix.
 *
 * Next renders not-found pages without the route params, so this falls back to
 * the primary language rather than guessing.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <div className={styles.wrapper}>
      <Container width="narrow">
        <p className={styles.code}>404</p>
        <h1 className={styles.headline}>{dict.notFound.headline}</h1>
        <p className={styles.text}>{dict.notFound.text}</p>
        <Link href={`/${defaultLocale}`} className={styles.link}>
          {dict.notFound.cta}
        </Link>
      </Container>
    </div>
  );
}
