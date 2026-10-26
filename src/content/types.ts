export const LOCALES = ['da', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** A value that exists once per supported language. TypeScript enforces parity. */
export type Localized<T> = Record<Locale, T>;

export type ContactKind = 'email' | 'github' | 'linkedin' | 'web' | 'location';

export interface ContactLink {
  kind: ContactKind;
  /** Text shown to the reader (and printed). */
  label: string;
  href?: string;
}

export interface Profile {
  name: string;
  title: Localized<string>;
  summary: Localized<string>;
  /** File name inside /public. */
  photo: string;
  contacts: ContactLink[];
}

export interface Experience {
  id: string;
  company: string;
  role: Localized<string>;
  location: string;
  /** "YYYY-MM" is formatted per locale; any other string is shown as-is. */
  start: string;
  /** null means current position. */
  end: string | null;
  summary: Localized<string>;
  highlights: Localized<string[]>;
  tech: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: Localized<string>;
  start: string;
  end: string | null;
}

export interface SkillGroup {
  id: string;
  label: Localized<string>;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  description: Localized<string>;
  tech: string[];
  href?: string;
}

export interface SpokenLanguage {
  id: string;
  label: Localized<string>;
  level: Localized<string>;
}
