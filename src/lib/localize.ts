import type { Locale, LocalizedText } from '../content';

export const resolve = (text: LocalizedText, locale: Locale): string =>
  typeof text === 'string' ? text : text[locale];
