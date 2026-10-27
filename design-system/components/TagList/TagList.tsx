import { cx } from '../../utils';
import './TagList.css';

export interface TagListProps {
  /** Short labels, e.g. technologies. Rendered as a real list so parsers read them as keywords. */
  items: readonly string[];
  className?: string;
}

/** Inline pill list for technologies and skills. Adapts automatically inside a dark Card. */
export function TagList({ items, className }: TagListProps) {
  return (
    <ul className={cx('ds-tags', className)}>
      {items.map((item) => (
        <li key={item} className="ds-tags__tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
