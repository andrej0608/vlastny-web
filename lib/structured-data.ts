import { siteConfig } from '@/content/site';
import type { Dictionary } from '@/content/translations';
import { localeHtmlLang, type Locale } from './i18n';

/**
 * schema.org data, emitted as JSON-LD.
 *
 * Everything here describes only what is actually true: a named person who
 * offers a service in a stated area. No company registration number, VAT
 * number, opening hours, rating or review count is claimed, because none has
 * been provided. Inventing any of those is both dishonest and, for ratings,
 * against Google's structured data policies.
 */

const PERSON_ID = `${siteConfig.url}/#person`;
const SERVICE_ID = `${siteConfig.url}/#service`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function buildStructuredData(locale: Locale, dict: Dictionary) {
  const localeUrl = `${siteConfig.url}/${locale}`;

  /* Unconfigured channels are omitted rather than published as placeholders:
     structured data must describe only what actually exists. */
  const sameAs = siteConfig.contact.linkedin
    ? [siteConfig.contact.linkedin]
    : [];

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: siteConfig.name,
    url: localeUrl,
    jobTitle: dict.meta.tagline,
    ...(siteConfig.contact.email && {
      email: `mailto:${siteConfig.contact.email}`,
    }),
    ...(siteConfig.contact.phone && { telephone: siteConfig.contact.phone }),
    ...(sameAs.length > 0 && { sameAs }),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      postalCode: siteConfig.location.postalCode,
      addressCountry: siteConfig.location.countryCode,
    },
  };

  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': SERVICE_ID,
    name: siteConfig.name,
    description: dict.meta.description,
    url: localeUrl,
    founder: { '@id': PERSON_ID },
    ...(siteConfig.contact.email && {
      email: `mailto:${siteConfig.contact.email}`,
    }),
    ...(siteConfig.contact.phone && { telephone: siteConfig.contact.phone }),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    areaServed: siteConfig.areaServedCountryCodes.map((code) => ({
      '@type': 'Country',
      identifier: code,
    })),
    /* The four service categories, taken straight from the content file so
       they can never drift out of sync with what the page says. */
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: dict.services.headline,
      itemListElement: dict.services.items.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: localeUrl,
    name: siteConfig.name,
    description: dict.meta.description,
    inLanguage: localeHtmlLang[locale],
    publisher: { '@id': PERSON_ID },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [person, professionalService, website],
  };
}

/**
 * FAQ markup, for the page that actually shows the questions.
 *
 * Emitted from the FAQ page rather than the homepage: structured data has to
 * describe content the visitor can see, and the homepage no longer shows any
 * of it. Marking it up there anyway would be exactly the kind of mismatch
 * Google's guidelines are written against.
 */
export function buildFaqStructuredData(locale: Locale, dict: Dictionary) {
  const localeUrl = `${siteConfig.url}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${localeUrl}/#faq`,
    inLanguage: localeHtmlLang[locale],
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
