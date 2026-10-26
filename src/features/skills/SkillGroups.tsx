import { skillGroups } from '../../content';
import { TagList } from '../../components/Tag/TagList';
import { useLocale } from '../../hooks/useLocale';
import { resolve } from '../../lib/localize';
import styles from './SkillGroups.module.css';

export function SkillGroups() {
  const { locale } = useLocale();

  return (
    <div className={styles.groups}>
      {skillGroups.map((group) => (
        <div key={group.id} className={styles.group}>
          <h3 className={styles.label}>{group.label[locale]}</h3>
          <TagList items={group.items.map((item) => resolve(item, locale))} />
        </div>
      ))}
    </div>
  );
}
