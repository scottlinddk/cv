import { SkillGroups } from '@scottlind/cv-design-system';

const groups = [
  {
    id: 'fe',
    label: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Vue', 'HTML & CSS'],
  },
  { id: 'be', label: 'Backend & CMS', items: ['C#', '.NET', 'Umbraco', 'Blazor'] },
  {
    id: 'arch',
    label: 'Architecture & leadership',
    items: ['Frontend architecture', 'Project management', 'Mentoring'],
  },
];

export const List = () => (
  <div style={{ maxWidth: 260, fontSize: '0.85rem' }}>
    <SkillGroups groups={groups} variant="list" />
  </div>
);

export const Cards = () => <SkillGroups groups={groups} variant="cards" />;
