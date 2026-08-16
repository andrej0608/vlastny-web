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
import { MailIcon, PhoneIcon, LinkedInIcon } from '@/components/ui/ContactIcons';
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
                  <a href={emailHref} className={styles.contactRow}>
                    <span className={styles.contactIcon} aria-hidden="true">
                      <MailIcon />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>
                        {dict.common.email}
                      </span>
                      <span className={styles.contactValue}>
                        {siteConfig.contact.email}
                      </span>
                    </span>
                  </a>
                </li>
              )}

              {/* A plain outbound link. Nothing from WhatsApp or Meta is
                  loaded into this page; the visitor's browser only contacts
                  them once this link is deliberately followed. */}
              {whatsappHref && (
                <li className={styles.contactItem}>
                  <a
                    href={whatsappHref}
                    className={styles.contactRow}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={[styles.contactIcon, styles.whatsappIcon].join(
                        ' '
                      )}
                      aria-hidden="true"
                    >
                      <WhatsAppIcon size={20} />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>
                        {dict.common.whatsapp}
                      </span>
                      <span className={styles.contactValue}>
                        {siteConfig.contact.phone}
                      </span>
                    </span>
                    {/* Says what the link does, since the visible text is
                        just a number. */}
                    <span className="visually-hidden">
                      — {dict.contact.whatsappAction}
                    </span>
                  </a>
                </li>
              )}

              {telHref && (
                <li className={styles.contactItem}>
                  <a href={telHref} className={styles.contactRow}>
                    <span className={styles.contactIcon} aria-hidden="true">
                      <PhoneIcon />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>
                        {dict.common.phone}
                      </span>
                      <span className={styles.contactValue}>
                        {siteConfig.contact.phone}
                      </span>
                    </span>
                  </a>
                </li>
              )}

              {siteConfig.contact.linkedin && (
                <li className={styles.contactItem}>
                  <a
                    href={siteConfig.contact.linkedin}
                    className={styles.contactRow}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.contactIcon} aria-hidden="true">
                      <LinkedInIcon />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>
                        {dict.common.linkedin}
                      </span>
                      <span className={styles.contactValue}>
                        {siteConfig.name}
                      </span>
                    </span>
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
