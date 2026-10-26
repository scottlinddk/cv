import type { SkillGroup, SpokenLanguage } from './types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', da: 'Frontend' },
    items: ['React', 'TypeScript', 'TanStack Query', 'React Router', 'HTML & CSS'],
  },
  {
    id: 'backend',
    label: { en: 'Backend & CMS', da: 'Backend & CMS' },
    items: ['C#', '.NET', 'Umbraco', 'Blazor'],
  },
];

// PLACEHOLDER levels
export const spokenLanguages: SpokenLanguage[] = [
  { id: 'da', label: { en: 'Danish', da: 'Dansk' }, level: { en: 'Native', da: 'Modersmål' } },
  { id: 'en', label: { en: 'English', da: 'Engelsk' }, level: { en: 'Fluent', da: 'Flydende' } },
];
