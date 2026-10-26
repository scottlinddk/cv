import type { Experience } from './types';

export const experience: Experience[] = [
  {
    id: 'norlys',
    company: 'Norlys Energy Trading',
    role: { en: 'Frontend Developer', da: 'Frontend-udvikler' },
    location: { en: 'Denmark', da: 'Danmark' },
    start: '2026-01',
    end: null,
    highlights: {
      en: [
        'Build data-dense React and TypeScript interfaces for energy trading, giving traders fast, clear views of live market data',
      ],
      da: [
        'Udvikler datatætte React- og TypeScript-grænseflader til energihandel, der giver tradere hurtigt og klart overblik over live markedsdata',
      ],
    },
    tech: ['React', 'TypeScript', 'TanStack Query', 'React Router'],
  },
  {
    id: 'koerber',
    company: 'Körber Supply Chain',
    role: { en: 'Frontend Architect', da: 'Frontend-arkitekt' },
    location: { en: 'Arden, Denmark', da: 'Arden, Danmark' },
    start: '2025-11',
    end: '2025-12',
    highlights: { en: [], da: [] },
    tech: [],
  },
  {
    id: 'jcd-lead',
    company: 'JCD A/S',
    role: {
      en: 'Web Project Manager & Frontend Architect',
      da: 'Projektleder for web + Frontend-arkitekt',
    },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2024-10',
    end: '2025-11',
    highlights: {
      en: [
        'Led digital projects from idea to implementation with a focus on user experience and business value',
        'Worked closely with developers and stakeholders to ensure technical quality and progress',
        'Set the direction for frontend architecture',
      ],
      da: [
        'Ledelse af digitale projekter fra idé til implementering med fokus på brugeroplevelse og forretningsværdi',
        'Tæt samarbejde med udviklere og interessenter for at sikre teknisk kvalitet og fremdrift',
        'Sat retning for frontend-arkitektur',
      ],
    },
    tech: [],
  },
  {
    id: 'jcd-dev',
    company: 'JCD A/S',
    role: { en: 'Frontend Developer', da: 'Frontend-udvikler' },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2022-09',
    end: '2024-09',
    highlights: {
      en: [
        'Built web-based solutions in Vue and .NET with a focus on performance and usability',
        'Translated business needs into functional interfaces in collaboration with design and backend',
        'Took an active part in architecture decisions and component design',
        'Worked on both internal and customer-facing systems of high complexity',
      ],
      da: [
        'Udviklede webbaserede løsninger i Vue og .NET med fokus på performance og brugervenlighed',
        'Omsatte forretningsbehov til funktionelle interfaces i samarbejde med design og backend',
        'Deltog aktivt i arkitekturbeslutninger og komponentopbygning',
        'Involveret i både interne og kundevendte systemer med høj kompleksitet',
      ],
    },
    tech: ['Vue', '.NET'],
  },
  {
    id: 'lidt-lakrids',
    company: 'Lidt Lakrids A/S',
    role: { en: 'Frontend Developer', da: 'Frontend-udvikler' },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2022-01',
    end: '2022-08',
    highlights: {
      en: ['Built UI components and implemented design updates using modern web technologies'],
      da: [
        'Udviklede UI-komponenter og implementerede designopdateringer med moderne webteknologier',
      ],
    },
    tech: [],
  },
  {
    id: 'telia',
    company: 'TeliaCompany',
    role: { en: 'Customer Advisor', da: 'Kunderådgiver' },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2017-09',
    end: '2020-09',
    highlights: {
      en: [
        'Consistently exceeded sales targets and was nominated for Sales Assistant of the Year in two categories: total sales and accessories',
        'Gained deep insight into user behaviour, preferences and objections, experience I draw on today in my product- and customer-oriented work',
      ],
      da: [
        'Overgik konsekvent salgsmål og blev nomineret til Årets Salgsassistent i to kategorier: samlet salg og tilbehør',
        'Opnåede dyb indsigt i brugeradfærd, præferencer og indvendinger, erfaring jeg i dag trækker på i mit produkt- og kundeorienterede arbejde',
      ],
    },
    tech: [],
  },
];
