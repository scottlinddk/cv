import { Card, TagList } from '@scottlind/cv-design-system';

export const Default = () => (
  <TagList items={['React', 'TypeScript', 'TanStack Query', 'React Router', 'Vite']} />
);

export const InsideCard = () => (
  <Card title="Backend & CMS">
    <TagList items={['C#', '.NET', 'Umbraco', 'Blazor']} />
  </Card>
);
