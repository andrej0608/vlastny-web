import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/content/translations';
import { isLocale, type Locale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import { buildStructuredData } from '@/lib/structured-data';
import { supportingPageLinks } from '@/lib/routes';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Automation } from '@/components/sections/Automation';
import { AiAdoption } from '@/components/sections/AiAdoption';
import { WhyWebsite } from '@/components/sections/WhyWebsite';
import { Work } from '@/components/sections/Work';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { ExploreNav } from '@/components/layout/ExploreNav';

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

      {/*
        The middle of the page runs as one argument:
          what I offer            -> Services
          why a website matters   -> WhyWebsite
          why automation matters  -> Automation
          that this is happening  -> AiAdoption
          what I have built       -> Work

        The worked examples, the FAQ and the areas served used to sit in this
        run too. They were the three longest blocks and the ones most often
        scrolled past, so they are pages of their own now - reachable from the
        rail, from within the automation section, and from the footer.
      */}
      <WhyWebsite dict={dict} />
      <Automation locale={locale} dict={dict} />
      <AiAdoption locale={locale} dict={dict} />
      <Work locale={locale} dict={dict} />
      <Process dict={dict} />
      <About dict={dict} />
      <Contact locale={locale} dict={dict} />

      {/* Fixed to the viewport, so it must stay a direct child here: no
          ancestor between this and <body> carries a filter or a transform. */}
      <ExploreNav
        links={supportingPageLinks(locale, dict)}
        triggerText={dict.common.explore}
        label={dict.common.exploreLabel}
      />
    </>
  );
}
