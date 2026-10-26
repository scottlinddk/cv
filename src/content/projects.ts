import type { Project } from './types';

// PLACEHOLDER CONTENT
export const projects: Project[] = [
  {
    id: 'cv',
    name: 'This CV',
    description: {
      en: 'Print-perfect CV site with PDF export generated at build time.',
      da: 'CV-site med perfekt print og PDF-eksport genereret ved build.',
    },
    tech: ['React', 'TypeScript', 'Playwright'],
    href: 'https://github.com/scottlinddk/cv',
  },
];
