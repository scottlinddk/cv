import { projects } from '../../content';
import { TagList } from '../../components/Tag/TagList';
import { useLocale } from '../../hooks/useLocale';
import styles from './ProjectList.module.css';

export function ProjectList() {
  const { locale } = useLocale();

  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.id} className={styles.item}>
          <h3 className={styles.name}>
            {project.href ? <a href={project.href}>{project.name}</a> : project.name}
          </h3>
          <p className={styles.description}>{project.description[locale]}</p>
          <TagList items={project.tech} />
        </li>
      ))}
    </ul>
  );
}
