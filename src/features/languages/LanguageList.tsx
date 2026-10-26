import { spokenLanguages } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import styles from './LanguageList.module.css';

export function LanguageList() {
  const { locale } = useLocale();

  return (
    <ul className={styles.list}>
      {spokenLanguages.map((language) => (
        <li key={language.id}>
          <strong>{language.label[locale]}</strong>
          <span className={styles.level}> · {language.level[locale]}</span>
        </li>
      ))}
    </ul>
  );
}
