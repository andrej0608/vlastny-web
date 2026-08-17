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
  const t = dict.work.detail;

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

        {/* The featured image is usually the same shot that leads the gallery
            below, so it is only shown on its own when there is no gallery to
            open the case study instead. */}
        {project.image && !detail.gallery?.length && (
          <figure className={styles.feature}>
            <Image
              src={project.image.src}
              alt={project.image.alt[locale]}
              width={project.image.width}
              height={project.image.height}
              className={styles.image}
              sizes="(min-width: 46rem) 46rem, 100vw"
              priority
            />
          </figure>
        )}

        <div className={styles.prose}>
          {detail.paragraphs[locale].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {detail.highlights && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}>{t.showsHeading}</h2>
            <ul className={styles.highlights}>
              {detail.highlights[locale].map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Screenshots. The first is shown full width and the rest share a
            row, so the gallery has a focal point instead of three equals. */}
        {detail.gallery && detail.gallery.length > 0 && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}>{t.screenshotsHeading}</h2>
            <div className={styles.gallery}>
              {detail.gallery.map((shot, index) => (
                <figure
                  key={shot.src}
                  className={[styles.shot, index === 0 && styles.shotLead]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt[locale]}
                    width={shot.width}
                    height={shot.height}
                    className={styles.shotImage}
                    sizes={
                      index === 0
                        ? '(min-width: 46rem) 46rem, 100vw'
                        : '(min-width: 46rem) 23rem, 100vw'
                    }
                    /* The lead shot is the first thing worth seeing here. */
                    priority={index === 0}
                  />
                  {shot.caption && (
                    <figcaption className={styles.shotCaption}>
                      {shot.caption[locale]}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/*
          Demo recording. `preload="metadata"` fetches only enough to size the
          player — the file itself is downloaded when someone presses play.
          The poster means the player is never an empty black rectangle.
        */}
        {detail.video && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}>{t.videoHeading}</h2>
            <figure className={styles.videoFigure}>
              <video
                className={styles.video}
                controls
                preload="metadata"
                playsInline
                poster={detail.video.poster}
                width={detail.video.width}
                height={detail.video.height}
              >
                <source src={detail.video.src} type="video/mp4" />
                {/* Reached only if the browser cannot play MP4 at all. */}
                {t.videoUnsupported}
              </video>
              {/* The recording is silent, so this caption is how the content
                  reaches anyone who cannot or does not watch it. */}
              <figcaption className={styles.videoCaption}>
                {detail.video.description[locale]}
              </figcaption>
            </figure>
          </section>
        )}

        {detail.outcome && (
          <section className={[styles.block, styles.outcome].join(' ')}>
            <h2 className={styles.outcomeHeading}>{t.outcomeHeading}</h2>
            <p className={styles.outcomeText}>{detail.outcome[locale]}</p>
          </section>
        )}

        {/* Links appear only when a real URL is configured — never as a
            disabled or dead button. */}
        {(project.url || project.repositoryUrl) && (
          <div className={styles.actions}>
            {project.url && (
              <ButtonLink href={project.url} external size="lg">
                {dict.work.viewWebsite}
              </ButtonLink>
            )}
            {project.repositoryUrl && (
              <ButtonLink
                href={project.repositoryUrl}
                external
                size="lg"
                variant="secondary"
              >
                {t.viewRepository}
              </ButtonLink>
            )}
          </div>
        )}
      </Container>
    </article>
  );
}
