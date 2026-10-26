import { experience } from '../../content';
import { TagList } from '../../components/Tag/TagList';
import { useLocale } from '../../hooks/useLocale';
import { formatPeriod } from '../../lib/format';
import { resolve } from '../../lib/localize';
import styles from './ExperienceList.module.css';

export function ExperienceList() {
  const { locale, t } = useLocale();

  return (
    <ol className={styles.list}>
      {experience.map((job) => (
        <li key={job.id} className={styles.item}>
          <h3 className={styles.role}>
            {job.role[locale]}, <span className={styles.company}>{job.company}</span>
          </h3>
          <p className={styles.meta}>
            {formatPeriod(job.start, job.end, locale, t.present)} · {resolve(job.location, locale)}
          </p>
          {job.summary && <p className={styles.summary}>{job.summary[locale]}</p>}
          {job.highlights[locale].length > 0 && (
            <ul className={styles.highlights}>
              {job.highlights[locale].map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
          {job.tech.length > 0 && <TagList items={job.tech} />}
        </li>
      ))}
    </ol>
  );
}
