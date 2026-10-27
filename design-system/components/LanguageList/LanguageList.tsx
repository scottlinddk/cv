import { cx } from '../../utils';
import './LanguageList.css';

export interface LanguageItem {
  id: string;
  label: string;
  level: string;
}

export interface LanguageListProps {
  items: readonly LanguageItem[];
  className?: string;
}

/** Spoken languages with proficiency, e.g. "Danish · Native". */
export function LanguageList({ items, className }: LanguageListProps) {
  return (
    <ul className={cx('ds-languages', className)}>
      {items.map((language) => (
        <li key={language.id}>
          <strong>{language.label}</strong>
          <span className="ds-languages__level"> · {language.level}</span>
        </li>
      ))}
    </ul>
  );
}
