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
    allProjects: string;
    visitSite: string;
  };
  projectPage: { highlights: string; technologies: string; links: string };
  theme: { switchToLight: string; switchToDark: string };
  notFound: { title: string; body: string; link: string };
  create: {
    title: string;
    sourceLabel: string;
    sourceUrl: string;
    sourceText: string;
    urlLabel: string;
    textLabel: string;
    textPlaceholder: string;
    urlPlaceholder: string;
    accessCodeLabel: string;
    submit: string;
    loading: string;
    draftTitle: string;
    copy: string;
    copied: string;
    hint: string;
    letterTitle: string;
    letterLanguage: string;
    headlineLabel: string;
    headlineDefault: string;
    bodyLabel: string;
    exportPdf: string;
    exportHint: string;
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
    allProjects: 'All projects',
    visitSite: 'Visit site',
  },
  projectPage: { highlights: 'Highlights', technologies: 'Technologies', links: 'Links' },
  theme: { switchToLight: 'Switch to light mode', switchToDark: 'Switch to dark mode' },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist.',
    link: 'Go to the start page',
  },
  create: {
    title: 'Draft an application',
    sourceLabel: 'Job posting',
    sourceUrl: 'Link',
    sourceText: 'Paste text',
    urlLabel: 'Link to the job posting',
    textLabel: 'Paste the job posting',
    textPlaceholder: 'Paste the full text of the job posting here',
    urlPlaceholder: 'https://example.com/jobs/frontend-developer',
    accessCodeLabel: 'Access code',
    submit: 'Generate draft',
    loading: 'Writing draft…',
    draftTitle: 'Draft',
    copy: 'Copy',
    copied: 'Copied',
    hint: 'The draft is built from the CV on this site and written in the language of the posting. Always review it before sending.',
    letterTitle: 'Cover letter',
    letterLanguage: 'Letter language',
    headlineLabel: 'Headline',
    headlineDefault: 'Cover letter',
    bodyLabel: 'Text',
    exportPdf: 'Export PDF',
    exportHint:
      'Opens the print dialog. Choose “Save as PDF” as the destination and turn off headers and footers.',
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
    allProjects: 'Alle projekter',
    visitSite: 'Besøg siden',
  },
  projectPage: { highlights: 'Hovedpunkter', technologies: 'Teknologier', links: 'Links' },
  theme: { switchToLight: 'Skift til lys tilstand', switchToDark: 'Skift til mørk tilstand' },
  notFound: {
    title: 'Siden blev ikke fundet',
    body: 'Siden du leder efter findes ikke.',
    link: 'Gå til forsiden',
  },
  create: {
    title: 'Lav et ansøgningsudkast',
    sourceLabel: 'Jobopslag',
    sourceUrl: 'Link',
    sourceText: 'Indsæt tekst',
    urlLabel: 'Link til jobopslaget',
    textLabel: 'Indsæt jobopslaget',
    textPlaceholder: 'Indsæt hele teksten fra jobopslaget her',
    urlPlaceholder: 'https://eksempel.dk/job/frontend-udvikler',
    accessCodeLabel: 'Adgangskode',
    submit: 'Lav udkast',
    loading: 'Skriver udkast…',
    draftTitle: 'Udkast',
    copy: 'Kopiér',
    copied: 'Kopieret',
    hint: 'Udkastet bygger på CV’et på siden og skrives på opslagets sprog. Læs det altid igennem, før du sender det.',
    letterTitle: 'Motiveret ansøgning',
    letterLanguage: 'Brevets sprog',
    headlineLabel: 'Overskrift',
    headlineDefault: 'Motiveret ansøgning',
    bodyLabel: 'Tekst',
    exportPdf: 'Eksportér PDF',
    exportHint:
      'Åbner udskriftsdialogen. Vælg “Gem som PDF” som destination, og slå sidehoved og sidefod fra.',
  },
};

export const ui: Localized<UiStrings> = { en, da };
