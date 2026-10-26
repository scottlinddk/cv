import { LOCALES, DEFAULT_LOCALE, type Locale } from '../content';

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.some((locale) => locale === value);
}

/** Danish browsers get Danish, everyone else English. */
export function detectLocale(languages: readonly string[] = []): Locale {
  const first = languages[0]?.toLowerCase() ?? '';
  return first.startsWith('da') ? 'da' : DEFAULT_LOCALE;
}

/** Replaces the leading /:lang segment, keeping the rest of the path. */
export function switchLocalePath(pathname: string, next: Locale): string {
  const [, current, ...rest] = pathname.split('/');
  return '/' + [next, ...(isLocale(current) ? rest : [current, ...rest])].filter(Boolean).join('/');
}
