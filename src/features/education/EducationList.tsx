import { education } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { formatPeriods } from '../../lib/format';
import styles from './EducationList.module.css';

export function EducationList() {
  const { locale, t } = useLocale();

  return (
    <ul className={styles.list}>
      {education.map((entry) => (
        <li key={entry.id} className={styles.item}>
          <p className={styles.period}>{formatPeriods(entry.periods, locale, t.present)}</p>
          <h3 className={styles.institution}>{entry.institution}</h3>
          <p className={styles.degree}>{entry.degree[locale]}</p>
          {entry.highlights && (
            <ul className={styles.highlights}>
              {entry.highlights[locale].map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
