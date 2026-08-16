import { notFound } from 'next/navigation';
import { getDictionary } from '@/content/translations';
import { isLocale, locales, localeHtmlLang, type Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from './layout.module.css';

/** Both languages are rendered as static pages at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  // Anything that is not a known language is a 404, not a broken page.
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={localeHtmlLang[locale]}>
      <body>
        <a href="#main" className="skip-link">
          {dict.common.skipToContent}
        </a>

        <div className={styles.shell}>
          <Header locale={locale} dict={dict} />
          <main id="main" className={styles.main} tabIndex={-1}>
            {children}
          </main>
          <Footer locale={locale} dict={dict} />
        </div>
      </body>
    </html>
  );
}
