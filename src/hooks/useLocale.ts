import { createContext, useContext } from 'react';
import type { Locale } from '../content';
import { ui, type UiStrings } from '../i18n/ui';

export interface LocaleState {
  locale: Locale;
  t: UiStrings;
}

export const LocaleContext = createContext<LocaleState | null>(null);

export function useLocale(): LocaleState {
  const value = useContext(LocaleContext);
  if (!value) throw new Error('useLocale must be used inside <LocaleLayout>');
  return value;
}

export function makeLocaleState(locale: Locale): LocaleState {
  return { locale, t: ui[locale] };
}
