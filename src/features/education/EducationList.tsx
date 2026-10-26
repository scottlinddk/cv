import { education } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { formatPeriod } from '../../lib/format';
import styles from './EducationList.module.css';

export function EducationList() {
  const { locale, t } = useLocale();

  return (
    <ul className={styles.list}>
      {education.map((entry) => (
        <li key={entry.id} className={styles.item}>
          <h3 className={styles.degree}>{entry.degree[locale]}</h3>
          <p className={styles.meta}>
            {entry.institution} · {formatPeriod(entry.start, entry.end, locale, t.present)}
          </p>
        </li>
      ))}
    </ul>
  );
}
