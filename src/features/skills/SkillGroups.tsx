import { skillGroups } from '../../content';
import { TagList } from '../../components/Tag/TagList';
import { useLocale } from '../../hooks/useLocale';
import styles from './SkillGroups.module.css';

interface SkillGroupsProps {
  /** "chips" for the web page, "bullets" for the compact CV sidebar. */
  variant?: 'chips' | 'bullets';
}

export function SkillGroups({ variant = 'chips' }: SkillGroupsProps) {
  const { locale } = useLocale();

  return (
    <div className={styles.groups}>
      {skillGroups.map((group) => (
        <div key={group.id} className={styles.group}>
          <h3 className={styles.label}>{group.label[locale]}</h3>
          {variant === 'chips' ? (
            <TagList items={group.items} />
          ) : (
            <ul className={styles.bullets}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
