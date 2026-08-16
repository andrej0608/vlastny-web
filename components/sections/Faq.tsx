import type { Dictionary } from '@/content/translations';
import { Section } from '@/components/ui/Section';
import { Accordion } from '@/components/ui/Accordion';

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <Section
      width="narrow"
      eyebrow={dict.faq.eyebrow}
      heading={dict.faq.headline}
      intro={dict.faq.intro}
    >
      <Accordion items={dict.faq.items} name="faq" />
    </Section>
  );
}
