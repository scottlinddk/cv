import { ProjectList } from '@scottlind/cv-design-system';

export const Default = () => (
  <ProjectList
    items={[
      {
        id: 'cv',
        name: 'Personal CV',
        description: 'Bilingual CV site with build-time A4 PDF export.',
        tech: ['React', 'TypeScript', 'Vite'],
        href: 'https://example.dk/cv',
      },
      {
        id: 'running',
        name: 'Running',
        description: 'Training plans and a journal for runners.',
        tech: ['Next.js', 'Payload CMS'],
      },
    ]}
  />
);
