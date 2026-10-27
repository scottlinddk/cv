import { Link, useLocation } from 'react-router';
import { LanguageSwitch } from '../../../design-system/index';
import { LOCALES } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { switchLocalePath } from '../../lib/paths';

/** Router-aware language switch: keeps the current path and query, changes the locale segment. */
export function AppLanguageSwitch() {
  const { locale, t } = useLocale();
  const { pathname, search } = useLocation();

  return (
    <LanguageSwitch
      as={Link}
      label={t.actions.language}
      items={LOCALES.map((code) => ({
        code,
        href: `${switchLocalePath(pathname, code)}${search}`,
        current: code === locale,
      }))}
    />
  );
}
