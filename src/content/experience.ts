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
    id: 'freelance',
    company: 'Selvstændig',
    role: { en: 'Freelance Multimedia Designer', da: 'Freelance Multimediedesigner' },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2021-01',
    end: '2022-04',
    highlights: {
      en: [
        'Web design and development',
        'Analysis of existing web solutions',
        'Implementation of web solutions',
        'Customer care',
      ],
      da: [
        'Webdesign og -udvikling',
        'Analyse af eksisterende webløsninger',
        'Implementering af webløsninger',
        'Kundepleje',
      ],
    },
    tech: [],
  },
  {
    id: 'humac-part-time',
    company: 'Humac A/S',
    role: { en: 'Part-time Sales Assistant', da: 'Deltidsmedarbejder i salg' },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2020-09',
    end: '2021-11',
    highlights: { en: [], da: [] },
    tech: [],
  },
  {
    id: 'bugtens-bryghus',
    company: 'Bugtens Bryghus',
    role: { en: 'Co-owner', da: 'Anpartshaver' },
    location: { en: 'Brovst, Denmark', da: 'Brovst, Danmark' },
    start: '2020-06',
    end: '2024-06',
    highlights: {
      en: [
        'Co-owned a brewery producing beer, mead, lemonade and other drinks, from love of the products, respect for the craft and the taste of good raw materials',
      ],
      da: [
        'Medejer af et bryggeri, der producerer øl, mjød, sodavand og andre drikke ud fra kærlighed til produkterne, respekt for håndværket og smagen af gode råvarer',
      ],
    },
    tech: [],
  },
  {
    id: 'humac-full-time',
    company: 'Humac A/S',
    role: { en: 'Sales Assistant', da: 'Salgsassistent' },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2015-10',
    end: '2017-08',
    highlights: {
      en: [
        'Took part in sales budgeting for employees, sales training, ambassador duties for brand partners and day-to-day sales at Aalborg Storcenter',
      ],
      da: [
        'Deltog i salgsbudgettering for medarbejdere, salgstræning, ambassadøropgaver for brandpartnere og det daglige salg i Aalborg Storcenter',
      ],
    },
    tech: [],
  },
  {
    id: 'aau-student-advisor',
    company: 'Aalborg University',
    role: {
      en: 'Student Advisor & Rus Instructor',
      da: 'Studievejleder og rusvejleder',
    },
    location: { en: 'Aalborg, Denmark', da: 'Aalborg, Danmark' },
    start: '2015-02',
    end: '2015-12',
    highlights: {
      en: [
        'As rus instructor, part of a student team that planned and ran activities for new students on several IT and design programmes',
        'Volunteered as tutor alongside the rus role',
      ],
      da: [
        'Som rusvejleder en del af et studenterhold, der planlagde og afviklede aktiviteter for nye studerende på flere IT- og designuddannelser',
        'Frivillig tutor ved siden af rusrollen',
      ],
    },
    tech: [],
  },
  {
    id: 'ikea',
    company: 'IKEA Group',
    role: {
      en: 'Customer Relations and Goods Handout',
      da: 'Kundeservice og vareudlevering',
    },
    start: '2013-07',
    end: '2015-12',
    highlights: {
      en: ['Customer relations, returns, goods handouts and spare parts'],
      da: ['Kundeservice, returvarer, vareudlevering og reservedele'],
    },
    tech: [],
  },
  {
    id: 'quick-trans',
    company: 'Quick Trans',
    role: { en: 'IT Employee', da: 'IT-medarbejder' },
    start: '2013-03',
    end: '2015-12',
    highlights: { en: [], da: [] },
    tech: [],
  },
];
