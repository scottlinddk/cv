import type { Localized } from '../content';

export interface UiStrings {
  skipToContent: string;
  present: string;
  nav: { home: string; cv: string };
  sections: {
    summary: string;
    experience: string;
    skills: string;
    education: string;
    projects: string;
    languages: string;
    contact: string;
  };
  actions: {
    viewCv: string;
    downloadPdf: string;
    print: string;
    backToSite: string;
    language: string;
  };
  theme: { label: string; system: string; light: string; dark: string };
  notFound: { title: string; body: string; link: string };
  create: {
    title: string;
    urlLabel: string;
    urlPlaceholder: string;
    accessCodeLabel: string;
    submit: string;
    loading: string;
    draftTitle: string;
    copy: string;
    copied: string;
    hint: string;
  };
}

const en: UiStrings = {
  skipToContent: 'Skip to content',
  present: 'Present',
  nav: { home: 'Home', cv: 'CV' },
  sections: {
    summary: 'Profile',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    projects: 'Projects',
    languages: 'Languages',
    contact: 'Contact',
  },
  actions: {
    viewCv: 'View CV',
    downloadPdf: 'Download PDF',
    print: 'Print',
    backToSite: 'Back to site',
    language: 'Language',
  },
  theme: { label: 'Theme', system: 'Auto', light: 'Light', dark: 'Dark' },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist.',
    link: 'Go to the start page',
  },
  create: {
    title: 'Draft an application',
    urlLabel: 'Link to the job posting',
    urlPlaceholder: 'https://example.com/jobs/frontend-developer',
    accessCodeLabel: 'Access code',
    submit: 'Generate draft',
    loading: 'Writing draft…',
    draftTitle: 'Draft',
    copy: 'Copy',
    copied: 'Copied',
    hint: 'The draft is built from the CV on this site and written in the language of the posting. Always review it before sending.',
  },
};

const da: UiStrings = {
  skipToContent: 'Gå til indhold',
  present: 'Nuværende',
  nav: { home: 'Forside', cv: 'CV' },
  sections: {
    summary: 'Profil',
    experience: 'Erfaring',
    skills: 'Kompetencer',
    education: 'Uddannelse',
    projects: 'Projekter',
    languages: 'Sprog',
    contact: 'Kontakt',
  },
  actions: {
    viewCv: 'Se CV',
    downloadPdf: 'Download PDF',
    print: 'Print',
    backToSite: 'Tilbage til siden',
    language: 'Sprog',
  },
  theme: { label: 'Tema', system: 'Auto', light: 'Lys', dark: 'Mørk' },
  notFound: {
    title: 'Siden blev ikke fundet',
    body: 'Siden du leder efter findes ikke.',
    link: 'Gå til forsiden',
  },
  create: {
    title: 'Lav et ansøgningsudkast',
    urlLabel: 'Link til jobopslaget',
    urlPlaceholder: 'https://eksempel.dk/job/frontend-udvikler',
    accessCodeLabel: 'Adgangskode',
    submit: 'Lav udkast',
    loading: 'Skriver udkast…',
    draftTitle: 'Udkast',
    copy: 'Kopiér',
    copied: 'Kopieret',
    hint: 'Udkastet bygger på CV’et på siden og skrives på opslagets sprog. Læs det altid igennem, før du sender det.',
  },
};

export const ui: Localized<UiStrings> = { en, da };
