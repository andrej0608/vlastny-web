import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import { getProjects } from '@/content/projects';
import { Section } from '@/components/ui/Section';
import { RevealGroup } from '@/components/ui/Reveal';
import { ProjectCard } from './ProjectCard';
import styles from './Work.module.css';

interface WorkProps {
  locale: Locale;
  dict: Dictionary;
}

export function Work({ locale, dict }: WorkProps) {
  const projects = getProjects();

  return (
    <Section
      id={dict.work.id}
      eyebrow={dict.work.eyebrow}
      heading={dict.work.headline}
      intro={dict.work.intro}
      tone="default"
      // Shares a background with the examples section above it.
      divider
    >
      <RevealGroup as="ul" className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            dict={dict}
            priority={index === 0}
          />
        ))}
      </RevealGroup>
    </Section>
  );
}
