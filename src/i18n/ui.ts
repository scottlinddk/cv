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
  };
  actions: {
    viewCv: string;
    downloadPdf: string;
    print: string;
    backToSite: string;
    language: string;
  };
  notFound: { title: string; body: string; link: string };
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
  },
  actions: {
    viewCv: 'View CV',
    downloadPdf: 'Download PDF',
    print: 'Print',
    backToSite: 'Back to site',
    language: 'Language',
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist.',
    link: 'Go to the start page',
  },
};

const da: UiStrings = {
  skipToContent: 'Gå til indhold',
  present: 'Nu',
  nav: { home: 'Forside', cv: 'CV' },
  sections: {
    summary: 'Profil',
    experience: 'Erfaring',
    skills: 'Kompetencer',
    education: 'Uddannelse',
    projects: 'Projekter',
    languages: 'Sprog',
  },
  actions: {
    viewCv: 'Se CV',
    downloadPdf: 'Download PDF',
    print: 'Print',
    backToSite: 'Tilbage til siden',
    language: 'Sprog',
  },
  notFound: {
    title: 'Siden blev ikke fundet',
    body: 'Siden du leder efter findes ikke.',
    link: 'Gå til forsiden',
  },
};

export const ui: Localized<UiStrings> = { en, da };
