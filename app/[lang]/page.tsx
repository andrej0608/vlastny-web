import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/content/translations';
import { isLocale, type Locale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import { buildStructuredData } from '@/lib/structured-data';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Automation } from '@/components/sections/Automation';
import { WhyWebsite } from '@/components/sections/WhyWebsite';
import { Work } from '@/components/sections/Work';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Areas } from '@/components/sections/Areas';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);

  return buildPageMetadata({
    locale: lang,
    title: dict.meta.title,
    ogTitle: dict.meta.ogTitle,
    description: dict.meta.description,
    pathByLocale: { nl: '/nl', en: '/en' },
  });
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const structuredData = buildStructuredData(locale, dict);

  return (
    <>
      {/* JSON-LD describing the person, the service, the site and the FAQ. */}
      <script
        type="application/ld+json"
        // The content is generated from local data, never from user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero locale={locale} dict={dict} />
      <Services dict={dict} />
      {/* Automation sits directly after the services overview: it is the part
          of the offering that needs explaining, and it comes before the
          portfolio so the concept projects land in context. */}
      <Automation locale={locale} dict={dict} />
      <WhyWebsite dict={dict} />
      <Work locale={locale} dict={dict} />
      <Process dict={dict} />
      <About dict={dict} />
      <Areas dict={dict} />
      <Faq dict={dict} />
      <Contact locale={locale} dict={dict} />
    </>
  );
}
