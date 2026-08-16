import Link from 'next/link';
import { getDictionary } from '@/content/translations';
import { defaultLocale, localeHtmlLang } from '@/lib/i18n';
import styles from './not-found.module.css';

/**
 * Root-level 404, used for URLs that match no route at all.
 *
 * Because the root layout is intentionally thin (the <html> element depends on
 * the language), this page renders its own document shell.
 */
export default function RootNotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <html lang={localeHtmlLang[defaultLocale]}>
      <body>
        <main className={styles.wrapper}>
          <p className={styles.code}>404</p>
          <h1 className={styles.headline}>{dict.notFound.headline}</h1>
          <p className={styles.text}>{dict.notFound.text}</p>
          <Link href={`/${defaultLocale}`} className={styles.link}>
            {dict.notFound.cta}
          </Link>
        </main>
      </body>
    </html>
  );
}
