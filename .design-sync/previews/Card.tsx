import { Card, TagList } from '@scottlind/cv-design-system';

export const Default = () => (
  <Card title="Frontend">
    <TagList items={['JavaScript', 'TypeScript', 'React', 'HTML & CSS']} />
  </Card>
);

export const WithText = () => (
  <Card title="UI/UX design">
    <p>Clean interfaces focused on usability.</p>
  </Card>
);
