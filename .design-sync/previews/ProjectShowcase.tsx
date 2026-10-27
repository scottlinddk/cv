import { ProjectShowcase } from '@scottlind/cv-design-system';

const SHOT =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="#e8dfc8"/><rect x="48" y="48" width="544" height="36" rx="8" fill="#26211c"/><rect x="48" y="108" width="260" height="204" rx="8" fill="#dc4a1e"/><rect x="332" y="108" width="260" height="96" rx="8" fill="#b9ae98"/><rect x="332" y="216" width="260" height="96" rx="8" fill="#b9ae98"/></svg>',
  );

const items = [
  {
    id: 'cv',
    name: 'CV & design system',
    eyebrow: '2026 · Side project',
    description:
      'A bilingual CV site built on its own design system, with an ATS-friendly A4 PDF export.',
    tech: ['React', 'TypeScript', 'Vite'],
    links: [{ label: 'Source code', href: 'https://github.com/scottlinddk/cv' }],
  },
  {
    id: 'running',
    name: 'Running',
    eyebrow: '2026 · Side project',
    description:
      'Training programmes, a journal and AI-generated plans that sync with Strava and Garmin.',
    tech: ['Next.js', 'Payload CMS', 'Tailwind'],
  },
];

export const Default = () => <ProjectShowcase items={items} />;

export const WithScreenshot = () => (
  <ProjectShowcase
    items={[{ ...items[0]!, image: { src: SHOT, alt: 'Screenshot of the CV site' } }]}
  />
);
