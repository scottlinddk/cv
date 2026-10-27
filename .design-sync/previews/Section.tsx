import { Section, TagList } from '@scottlind/cv-design-system';

export const Default = () => (
  <Section title="Skills">
    <TagList items={['TypeScript', 'React', 'TanStack Query', 'React Router']} />
  </Section>
);

export const WithEyebrow = () => (
  <Section eyebrow="01" title="Experience">
    <p>Senior frontend developer building data-dense interfaces for energy trading.</p>
  </Section>
);

export const Nested = () => (
  <Section title="Work">
    <Section title="Frontend" headingLevel={3}>
      <p>React, TypeScript and design systems.</p>
    </Section>
  </Section>
);
