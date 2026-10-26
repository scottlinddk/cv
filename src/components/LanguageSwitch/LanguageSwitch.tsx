import { Link, useLocation } from 'react-router';
import { LOCALES } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { switchLocalePath } from '../../lib/paths';
import styles from './LanguageSwitch.module.css';

export function LanguageSwitch() {
  const { locale, t } = useLocale();
  const { pathname, search } = useLocation();

  return (
    <nav aria-label={t.actions.language} className={styles.switch}>
      {LOCALES.map((code) => (
        <Link
          key={code}
          to={{ pathname: switchLocalePath(pathname, code), search }}
          lang={code}
          hrefLang={code}
          aria-current={code === locale ? 'true' : undefined}
          className={styles.link}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
