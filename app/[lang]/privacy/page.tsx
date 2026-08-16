import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/content/translations';
import { isLocale, locales, type Locale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import { homePath, privacyPath } from '@/lib/routes';
import { siteConfig, emailHref } from '@/content/site';
import { Container } from '@/components/ui/Container';
import styles from './page.module.css';

/**
 * Privacy notice.
 *
 * Wording that depends on how the site is actually set up — which providers
 * are in use, whether form delivery is switched on — is chosen here from
 * `siteConfig.privacy` rather than hard-coded, so the notice cannot claim
 * something the implementation does not do.
 */

interface PageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);

  return buildPageMetadata({
    locale: lang,
    title: dict.privacy.metaTitle,
    description: dict.privacy.metaDescription,
    pathByLocale: { nl: privacyPath('nl'), en: privacyPath('en') },
  });
}

/** Formats the configured date for the reader's language. */
function formatDate(isoDate: string, locale: Locale): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return isoDate;

  return new Intl.DateTimeFormat(locale === 'nl' ? 'nl-BE' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const t = dict.privacy;

  const country =
    locale === 'nl'
      ? siteConfig.location.countryNl
      : siteConfig.location.countryEn;

  const { hostingProvider, emailDeliveryProvider } = siteConfig.privacy;

  return (
    <article className={styles.page}>
      <Container width="narrow">
        <Link href={homePath(locale)} className={styles.back}>
          ← {t.backToHome}
        </Link>

        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.intro}>{t.intro}</p>

        {/* Who processes your data */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.controller.heading}</h2>
          <p>{t.controller.intro}</p>

          <address className={styles.address}>
            <span className={styles.controllerName}>
              {siteConfig.business.legalName ?? siteConfig.name}
            </span>
            {/* General area only - never a residential street address. */}
            <span>
              {siteConfig.location.city}, {country}
            </span>
            {emailHref && (
              <a href={emailHref} className={styles.link}>
                {siteConfig.contact.email}
              </a>
            )}

            {/* Rendered only once a business is actually registered. */}
            {siteConfig.business.companyNumber && (
              <span>
                {dict.footer.business.companyNumber}:{' '}
                {siteConfig.business.companyNumber}
              </span>
            )}
            {siteConfig.business.vatNumber && (
              <span>
                {dict.footer.business.vatNumber}: {siteConfig.business.vatNumber}
              </span>
            )}
          </address>
        </section>

        {/* What information may be processed */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.dataCollected.heading}</h2>
          <p>{t.dataCollected.intro}</p>
          <ul className={styles.list}>
            {t.dataCollected.formItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{t.dataCollected.technical}</p>
        </section>

        {/* Why */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.purposes.heading}</h2>
          <p>{t.purposes.intro}</p>
          <ul className={styles.list}>
            {t.purposes.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Legal basis */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.legalBasis.heading}</h2>
          {t.legalBasis.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Retention */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.retention.heading}</h2>
          {t.retention.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Sharing - the wording follows the configuration exactly. */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.sharing.heading}</h2>
          <p>{t.sharing.intro}</p>
          <p>
            {hostingProvider
              ? t.sharing.hostingProvider.replace('{provider}', hostingProvider)
              : t.sharing.hostingUnknown}
          </p>
          <p>
            {emailDeliveryProvider
              ? t.sharing.emailProvider.replace(
                  '{provider}',
                  emailDeliveryProvider
                )
              : t.sharing.noEmailProvider}
          </p>
          <p>{t.sharing.serverLogs}</p>
        </section>

        {/* International transfers */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.international.heading}</h2>
          {t.international.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Cookies */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.cookies.heading}</h2>
          <p>{t.cookies.intro}</p>
          <p>{t.cookies.languageCookie}</p>
          <p>{t.cookies.noTracking}</p>
        </section>

        {/* Rights */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.rights.heading}</h2>
          <p>{t.rights.intro}</p>
          <ul className={styles.list}>
            {t.rights.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{t.rights.howTo}</p>
          <p>{t.rights.complaint}</p>
        </section>

        {/* Security */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.security.heading}</h2>
          {t.security.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Changes */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{t.changes.heading}</h2>
          {t.changes.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <p className={styles.lastUpdated}>
          {t.lastUpdatedLabel}:{' '}
          <time dateTime={siteConfig.privacy.lastUpdated}>
            {formatDate(siteConfig.privacy.lastUpdated, locale)}
          </time>
        </p>
      </Container>
    </article>
  );
}
