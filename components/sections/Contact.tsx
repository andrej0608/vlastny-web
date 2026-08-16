import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import {
  siteConfig,
  emailHref,
  telHref,
  buildWhatsAppHref,
  hasDirectContactChannel,
} from '@/content/site';
import { Section } from '@/components/ui/Section';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

interface ContactProps {
  locale: Locale;
  dict: Dictionary;
}

export function Contact({ locale, dict }: ContactProps) {
  // Pre-fills the chat in the visitor's own language; they can still edit it.
  const whatsappHref = buildWhatsAppHref(dict.contact.whatsappMessage);

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

            {/* Only configured channels are rendered - a visitor is never
                shown a placeholder address that does not work. With none
                configured, the list collapses and the form carries the
                section on its own. */}
            <ul className={styles.contactList} hidden={!hasDirectContactChannel}>
              {emailHref && (
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>{dict.common.email}</span>
                  <a href={emailHref} className={styles.contactValue}>
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}

              {telHref && (
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>{dict.common.phone}</span>
                  <a href={telHref} className={styles.contactValue}>
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}

              {/* A plain outbound link. Nothing from WhatsApp or Meta is
                  loaded into this page; the visitor's browser only contacts
                  them once this link is deliberately followed. */}
              {whatsappHref && (
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>
                    {dict.common.whatsapp}
                  </span>
                  <a
                    href={whatsappHref}
                    className={[styles.contactValue, styles.whatsappLink].join(' ')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    <span>{siteConfig.contact.phone}</span>
                    {/* Says what the link does, since the visible text is
                        just a number. */}
                    <span className="visually-hidden">
                      {' '}
                      — {dict.contact.whatsappAction}
                    </span>
                  </a>
                </li>
              )}

              {siteConfig.contact.linkedin && (
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
              )}
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
