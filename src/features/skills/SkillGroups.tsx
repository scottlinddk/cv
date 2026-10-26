import { skillGroups } from '../../content';
import { TagList } from '../../components/Tag/TagList';
import { useLocale } from '../../hooks/useLocale';
import styles from './SkillGroups.module.css';

export function SkillGroups() {
  const { locale } = useLocale();

  return (
    <dl className={styles.groups}>
      {skillGroups.map((group) => (
        <div key={group.id} className={styles.group}>
          <dt className={styles.label}>{group.label[locale]}</dt>
          <dd className={styles.items}>
            <TagList items={group.items} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
