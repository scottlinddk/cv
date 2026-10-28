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
    headlineLabel: string;
    headlinePlaceholder: string;
    bodyLabel: string;
    bodyPlaceholder: string;
    editor: { bold: string; italic: string; bulletList: string; orderedList: string };
    letterLanguage: string;
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
    title: 'Write a cover letter',
    headlineLabel: 'Headline',
    headlinePlaceholder: 'Cover letter: Senior Frontend Developer at Acme',
    bodyLabel: 'Text',
    bodyPlaceholder:
      'Paste or write the letter here. Enter starts a new paragraph, Shift+Enter a new line.',
    editor: {
      bold: 'Bold',
      italic: 'Italic',
      bulletList: 'Bulleted list',
      orderedList: 'Numbered list',
    },
    letterLanguage: 'Letter language',
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
    title: 'Skriv en motiveret ansøgning',
    headlineLabel: 'Overskrift',
    headlinePlaceholder: 'Motiveret ansøgning: Senior Frontend-udvikler hos Norlys',
    bodyLabel: 'Tekst',
    bodyPlaceholder:
      'Indsæt eller skriv brevet her. Enter starter et nyt afsnit, Shift+Enter en ny linje.',
    editor: {
      bold: 'Fed',
      italic: 'Kursiv',
      bulletList: 'Punktliste',
      orderedList: 'Nummereret liste',
    },
    letterLanguage: 'Brevets sprog',
    exportPdf: 'Eksportér PDF',
    exportHint:
      'Åbner udskriftsdialogen. Vælg “Gem som PDF” som destination, og slå sidehoved og sidefod fra.',
  },
};

export const ui: Localized<UiStrings> = { en, da };
