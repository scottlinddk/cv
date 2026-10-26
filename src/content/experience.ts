import type { Experience } from './types';

// PLACEHOLDER CONTENT: dates and highlights are examples only.
export const experience: Experience[] = [
  {
    id: 'norlys',
    company: 'Norlys Energy Trading',
    role: { en: 'Frontend Developer', da: 'Frontend-udvikler' },
    location: 'Denmark',
    start: '20XX',
    end: null,
    summary: {
      en: 'Frontend development for energy trading applications.',
      da: 'Frontend-udvikling af applikationer til energihandel.',
    },
    highlights: {
      en: [
        'Placeholder: built and maintained React + TypeScript applications.',
        'Placeholder: data fetching and caching with TanStack Query.',
      ],
      da: [
        'Pladsholder: udviklede og vedligeholdt React + TypeScript-applikationer.',
        'Pladsholder: datahentning og caching med TanStack Query.',
      ],
    },
    tech: ['React', 'TypeScript', 'TanStack Query', 'React Router'],
  },
];
