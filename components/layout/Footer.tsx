import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { siteConfig, telHref } from '@/content/site';
import { homePath, sectionPath } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './Footer.module.css';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <Link href={homePath(locale)} className={styles.brand}>
              {siteConfig.name}
            </Link>
            <p className={styles.tagline}>{dict.footer.tagline}</p>
            <p className={styles.description}>{dict.footer.description}</p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnHeading}>{dict.footer.navHeading}</h2>
            <ul className={styles.linkList}>
              {dict.nav.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={sectionPath(locale, item.id)}
                    className={styles.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnHeading}>{dict.footer.contactHeading}</h2>
            <ul className={styles.linkList}>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={styles.link}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              {telHref && (
                <li>
                  <a href={telHref} className={styles.link}>
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={siteConfig.contact.linkedin}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.common.linkedin}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnHeading}>{dict.footer.languageHeading}</h2>
            <LanguageSwitcher
              currentLocale={locale}
              label={dict.common.languageSwitcherLabel}
              variant="inline"
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
