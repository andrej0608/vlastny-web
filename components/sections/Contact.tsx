import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { siteConfig, telHref, whatsappHref } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

interface ContactProps {
  locale: Locale;
  dict: Dictionary;
}

export function Contact({ locale, dict }: ContactProps) {
  return (
    <Section id={dict.contact.id} tone="subtle">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{dict.contact.eyebrow}</p>
          <h2 className={styles.headline}>{dict.contact.headline}</h2>
          <p className={styles.text}>{dict.contact.text}</p>

          <div className={styles.details}>
            <h3 className={styles.detailsHeading}>
              {dict.contact.detailsHeading}
            </h3>

            {/* The only place a location is named anywhere on the site. */}
            <address className={styles.address}>
              <span className={styles.name}>{siteConfig.name}</span>
              <span className={styles.place}>
                {siteConfig.location.city}, {dict.contact.country}
              </span>
            </address>

            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{dict.common.email}</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={styles.contactValue}
                >
                  {siteConfig.contact.email}
                </a>
              </li>

              {telHref && (
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>{dict.common.phone}</span>
                  <a href={telHref} className={styles.contactValue}>
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}

              {whatsappHref && (
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <a
                    href={whatsappHref}
                    className={styles.contactValue}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </li>
              )}

              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>
                  {dict.common.linkedin}
                </span>
                <a
                  href={siteConfig.contact.linkedin}
                  className={styles.contactValue}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.common.linkedin}
                </a>
              </li>
            </ul>

            <p className={styles.responseNote}>{dict.contact.responseNote}</p>
          </div>
        </div>

        <div className={styles.formColumn}>
          <ContactForm locale={locale} dict={dict} />
        </div>
      </div>
    </Section>
  );
}
