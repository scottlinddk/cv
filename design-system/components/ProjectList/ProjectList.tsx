import { TagList } from '../TagList/TagList';
import { cx } from '../../utils';
import './ProjectList.css';

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  tech?: readonly string[];
  /** When present the name becomes a link. */
  href?: string;
}

export interface ProjectListProps {
  items: readonly ProjectItem[];
  className?: string;
}

/** Selected projects: name (optionally linked), description, technologies. */
export function ProjectList({ items, className }: ProjectListProps) {
  return (
    <ul className={cx('ds-projects', className)}>
      {items.map((project) => (
        <li key={project.id} className="ds-projects__item">
          <h3 className="ds-projects__name">
            {project.href ? <a href={project.href}>{project.name}</a> : project.name}
          </h3>
          <p className="ds-projects__description">{project.description}</p>
          {project.tech && project.tech.length > 0 && <TagList items={project.tech} />}
        </li>
      ))}
    </ul>
  );
}
