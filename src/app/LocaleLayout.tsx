import { useEffect, useMemo } from 'react';
import { Navigate, Outlet, useParams } from 'react-router';
import { LocaleContext, makeLocaleState } from '../hooks/useLocale';
import { isLocale } from '../lib/paths';

export function LocaleLayout() {
  const { lang } = useParams();
  const locale = isLocale(lang) ? lang : null;
  const value = useMemo(() => (locale ? makeLocaleState(locale) : null), [locale]);

  // Keeps <html lang> right, which also tags the language in the exported PDF.
  useEffect(() => {
    if (locale) document.documentElement.lang = locale;
  }, [locale]);

  if (!value) return <Navigate to="/" replace />;
  return (
    <LocaleContext.Provider value={value}>
      <Outlet />
    </LocaleContext.Provider>
  );
}
