import type { Project } from './types';

/**
 * Personal projects shown as a showcase on the site and as a compact list on the A4 CV.
 * Add an `image` (a file in /public) to give a card a screenshot. The section hides when empty.
 */
export const projects: Project[] = [
  {
    id: 'cv',
    name: 'CV & design system',
    eyebrow: { en: '2026 · Side project', da: '2026 · Sideprojekt' },
    description: {
      en: 'This bilingual CV site, built on its own design system. It exports an ATS-friendly A4 PDF at build time and stays readable on mobile.',
      da: 'Dette tosprogede CV, bygget på sit eget designsystem. Det eksporterer en ATS-venlig A4-PDF ved build og er læsbart på mobil.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'React Router'],
    href: 'https://github.com/scottlinddk/cv',
    links: [
      {
        label: { en: 'Source code', da: 'Kildekode' },
        href: 'https://github.com/scottlinddk/cv',
      },
    ],
  },
  {
    id: 'running',
    name: 'Running',
    eyebrow: { en: '2026 · Side project', da: '2026 · Sideprojekt' },
    description: {
      en: 'A site for runners with training programmes, a journal, gear tips and AI-generated training plans that sync with Strava and Garmin.',
      da: 'En side til løbere med træningsprogrammer, journal, udstyrstips og AI-genererede træningsplaner, der synkroniserer med Strava og Garmin.',
    },
    tech: ['Next.js', 'Payload CMS', 'TanStack Query', 'Tailwind'],
  },
];
