import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import type { Project } from '@/content/projects';
import { projectPath } from '@/lib/routes';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  /** The first card is above the fold on some screens, so it loads eagerly. */
  priority?: boolean;
}

export function ProjectCard({
  project,
  locale,
  dict,
  priority = false,
}: ProjectCardProps) {
  const statusLabel =
    project.status === 'client'
      ? dict.work.status.client
      : dict.work.status.concept;

  return (
    <li className={styles.card}>
      <div className={styles.media}>
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt[locale]}
            width={project.image.width}
            height={project.image.height}
            className={styles.image}
            sizes="(min-width: 64rem) 32rem, (min-width: 40rem) 45vw, 100vw"
            priority={priority}
            loading={priority ? undefined : 'lazy'}
          />
        ) : (
          /* Neutral placeholder. Reserves the same space as a real screenshot
             so adding images later causes no layout shift. */
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span
            className={[
              styles.status,
              project.status === 'client' ? styles.statusClient : styles.statusConcept,
            ].join(' ')}
          >
            <span className="visually-hidden">{dict.work.statusLabel}: </span>
            {statusLabel}
          </span>
          <span className={styles.type}>
            <span className="visually-hidden">{dict.work.typeLabel}: </span>
            {project.type[locale]}
          </span>
        </div>

        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.description}>{project.description[locale]}</p>

        <div className={styles.actions}>
          {project.url ? (
            <a
              href={project.url}
              className={styles.primaryAction}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.work.viewWebsite}
              <span className="visually-hidden"> — {project.name}</span>
              <svg
                viewBox="0 0 16 16"
                width="13"
                height="13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 3h7v7M13 3 3.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <span className={styles.noUrl}>{dict.work.noLiveUrl}</span>
          )}

          {project.detail && (
            <Link
              href={projectPath(locale, project.slug)}
              className={styles.secondaryAction}
            >
              {dict.work.viewDetails}
              <span className="visually-hidden"> — {project.name}</span>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}
