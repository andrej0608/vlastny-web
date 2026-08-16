import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/content/translations';
import { getProjectBySlug, getProjectsWithDetail } from '@/content/projects';
import { isLocale, locales, type Locale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import { getRouteKeyFromSegment, getSegment, homePath } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import styles from './page.module.css';

/**
 * Optional project detail page.
 *
 * Lives at /nl/werk/<slug> and /en/work/<slug> - the segment itself is
 * localised, which is why it is a dynamic `[section]` validated against the
 * route map rather than a hard-coded folder name.
 *
 * A project only gets a page once you add a `detail` block to it in
 * content/projects.ts. Until then nothing links here and nothing is generated.
 */

interface PageProps {
  params: Promise<{ lang: string; section: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getProjectsWithDetail().map((project) => ({
      lang,
      section: getSegment('work', lang),
      slug: project.slug,
    }))
  );
}

/** Shared guard: resolves the params or gives up. */
function resolve(lang: string, section: string, slug: string) {
  if (!isLocale(lang)) return null;
  if (getRouteKeyFromSegment(section, lang) !== 'work') return null;

  const project = getProjectBySlug(slug);
  if (!project?.detail) return null;

  return { locale: lang as Locale, project };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, section, slug } = await params;
  const resolved = resolve(lang, section, slug);
  if (!resolved) return {};

  const { locale, project } = resolved;
  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: `${project.name} — ${dict.work.headline}`,
    description: project.description[locale],
    pathByLocale: {
      nl: `/nl/${getSegment('work', 'nl')}/${project.slug}`,
      en: `/en/${getSegment('work', 'en')}/${project.slug}`,
    },
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { lang, section, slug } = await params;
  const resolved = resolve(lang, section, slug);
  if (!resolved) notFound();

  const { locale, project } = resolved;
  const dict = getDictionary(locale);
  const detail = project.detail!;

  const statusLabel =
    project.status === 'client'
      ? dict.work.status.client
      : dict.work.status.concept;

  return (
    <article className={styles.page}>
      <Container width="narrow">
        <Link href={`${homePath(locale)}#${dict.work.id}`} className={styles.back}>
          ← {dict.work.headline}
        </Link>

        <div className={styles.meta}>
          <span className={styles.status}>
            <span className="visually-hidden">{dict.work.statusLabel}: </span>
            {statusLabel}
          </span>
          <span className={styles.type}>{project.type[locale]}</span>
        </div>

        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.lead}>{project.description[locale]}</p>

        {project.image && (
          <Image
            src={project.image.src}
            alt={project.image.alt[locale]}
            width={project.image.width}
            height={project.image.height}
            className={styles.image}
            sizes="(min-width: 46rem) 46rem, 100vw"
            priority
          />
        )}

        <div className={styles.prose}>
          {detail.paragraphs[locale].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {detail.highlights && (
          <ul className={styles.highlights}>
            {detail.highlights[locale].map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        {project.url && (
          <div className={styles.actions}>
            <ButtonLink href={project.url} external size="lg">
              {dict.work.viewWebsite}
            </ButtonLink>
          </div>
        )}
      </Container>
    </article>
  );
}
