import type { SkillGroup, SpokenLanguage } from './types';

// Derived from the CV and stated stack. Edit freely.
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', da: 'Frontend' },
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vue',
      'TanStack Query',
      'React Router',
      'HTML & CSS',
    ],
  },
  {
    id: 'backend',
    label: { en: 'Backend & CMS', da: 'Backend & CMS' },
    items: ['C#', '.NET', 'Umbraco', 'Blazor'],
  },
  {
    id: 'practice',
    label: { en: 'Architecture & leadership', da: 'Arkitektur & ledelse' },
    items: [
      { en: 'Frontend architecture', da: 'Frontend-arkitektur' },
      { en: 'Project management', da: 'Projektledelse' },
      { en: 'UX design', da: 'UX design' },
      { en: 'Mentoring & knowledge sharing', da: 'Sparring og videndeling' },
    ],
  },
];

/** Left empty until levels are confirmed; the section is hidden while the list is empty. */
export const spokenLanguages: SpokenLanguage[] = [];
