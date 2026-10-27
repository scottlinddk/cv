import { ExperienceList } from '@scottlind/cv-design-system';

const items = [
  {
    id: 'norlys',
    role: 'Frontend Developer',
    company: 'Norlys Energy Trading',
    period: 'January 2026 – Present',
    location: 'Denmark',
    highlights: ['Build data-dense React and TypeScript interfaces for energy trading'],
    tech: ['React', 'TypeScript', 'TanStack Query'],
  },
  {
    id: 'koerber',
    role: 'Frontend Architect',
    company: 'Körber Supply Chain',
    period: 'November 2025 – January 2026',
    location: 'Arden, Denmark',
    tech: ['Blazor'],
  },
  {
    id: 'jcd',
    role: 'Frontend Developer',
    company: 'JCD A/S',
    period: 'September 2022 – September 2024',
    location: 'Aalborg, Denmark',
    summary: 'Web solutions in Vue and .NET.',
    highlights: [
      'Built web-based solutions with a focus on performance and usability',
      'Took an active part in architecture decisions and component design',
    ],
    tech: ['Vue', '.NET', 'Umbraco CMS'],
  },
];

export const Default = () => <ExperienceList items={items} />;

export const Compact = () => <ExperienceList items={items.slice(0, 2)} />;
