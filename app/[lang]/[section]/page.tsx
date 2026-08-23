import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/content/translations';
import { getProjectBySlug } from '@/content/projects';
import { isLocale, locales, type Locale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import { buildFaqStructuredData } from '@/lib/structured-data';
import {
  getRouteKeyFromSegment,
  getSegment,
  homePath,
  isSupportingPageKey,
  projectPath,
  sectionPath,
  supportingPageMeta,
  supportingPages,
  type SupportingPageKey,
} from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { ExamplesGrid } from '@/components/sections/Examples';
import { AreaGroups } from '@/components/sections/Areas';
import styles from './page.module.css';

/**
 * The three supporting pages: worked automation examples, the FAQ, and the
 * areas served.
 *
 * All three used to be sections on the homepage. They are pages now because the
 * homepage had grown long enough that they were being scrolled past rather than
 * read - but the content is the same content, moved rather than rewritten, so
 * none of it has dropped out of the index.
 *
 * One route rather than three folders, because the URL segment is localised
 * (/nl/automatisering, /en/automation) and a static folder cannot be. The
 * segment is validated against the route map, exactly as the project pages
 * alongside this file already do. A static sibling folder such as `privacy`
 * still wins over this dynamic one, which is how Next resolves the two.
 */

interface PageProps {
  params: Promise<{ lang: string; section: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    supportingPages.map((key) => ({ lang, section: getSegment(key, lang) }))
  );
}

/** Shared guard: resolves the params to a locale and a page, or gives up. */
function resolve(lang: string, section: string) {
  if (!isLocale(lang)) return null;

  const key = getRouteKeyFromSegment(section, lang);
  if (!isSupportingPageKey(key)) return null;

  return { locale: lang as Locale, key };
}

/** The eyebrow above each page's heading. The rest comes from `page`. */
function eyebrowFor(
  key: SupportingPageKey,
  dict: ReturnType<typeof getDictionary>
): string {
  const byKey: Record<SupportingPageKey, string> = {
    automation: dict.examples.eyebrow,
    faq: dict.faq.eyebrow,
    areas: dict.areas.eyebrow,
  };
  return byKey[key];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, section } = await params;
  const resolved = resolve(lang, section);
  if (!resolved) return {};

  const { locale, key } = resolved;
  const meta = supportingPageMeta(key, getDictionary(locale));

  return buildPageMetadata({
    locale,
    title: meta.metaTitle,
    description: meta.metaDescription,
    pathByLocale: {
      nl: `/nl/${getSegment(key, 'nl')}`,
      en: `/en/${getSegment(key, 'en')}`,
    },
  });
}

export default async function SupportingPage({ params }: PageProps) {
  const { lang, section } = await params;
  const resolved = resolve(lang, section);
  if (!resolved) notFound();

  const { locale, key } = resolved;
  const dict = getDictionary(locale);
  const meta = supportingPageMeta(key, dict);
  const eyebrow = eyebrowFor(key, dict);

  /* Only linked once the project is actually there, so removing it from the
     portfolio can never leave a dead link behind on this page. */
  const quotationTool =
    key === 'automation' ? getProjectBySlug('automated-quotation-tool') : undefined;

  return (
    <article className={styles.page}>
      {/* The FAQ markup follows the questions, so it lives on the page that
          actually shows them rather than on the homepage that no longer does.
          Structured data has to describe what is visible. */}
      {key === 'faq' && (
        <script
          type="application/ld+json"
          // Generated from local content, never from user input.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqStructuredData(locale, dict)),
          }}
        />
      )}

      <Container width="narrow">
        <Link href={homePath(locale)} className={styles.back}>
          ← {dict.common.backToHome}
        </Link>

        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{meta.title}</h1>
        <p className={styles.intro}>{meta.intro}</p>
      </Container>

      {/* The examples grid wants the full container; the other two read better
          at the narrower measure. */}
      <Container width={key === 'automation' ? 'default' : 'narrow'}>
        <div className={styles.body}>
          {key === 'automation' && <ExamplesGrid dict={dict} />}
          {key === 'faq' && <Accordion items={dict.faq.items} name="faq" />}
          {key === 'areas' && <AreaGroups dict={dict} />}
        </div>

        {key === 'areas' && (
          <div className={styles.prose}>
            {dict.areas.supporting.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className={styles.actions}>
          <ButtonLink href={sectionPath(locale, dict.contact.id)} size="lg">
            {meta.cta}
          </ButtonLink>

          {quotationTool && (
            <Link
              href={projectPath(locale, quotationTool.slug)}
              className={styles.sideLink}
            >
              {dict.examples.projectLink} →
            </Link>
          )}
        </div>
      </Container>
    </article>
  );
}
