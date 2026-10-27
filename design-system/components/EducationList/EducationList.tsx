import { cx } from '../../utils';
import './EducationList.css';

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  /** Pre-formatted period(s), e.g. "2012 – 2015". */
  period: string;
  highlights?: readonly string[];
}

export interface EducationListProps {
  items: readonly EducationItem[];
  className?: string;
}

/** Education entries: institution, degree, period, optional highlights. */
export function EducationList({ items, className }: EducationListProps) {
  return (
    <ul className={cx('ds-education', className)}>
      {items.map((entry) => (
        <li key={entry.id} className="ds-education__item">
          <h3 className="ds-education__institution">{entry.institution}</h3>
          <p className="ds-education__degree">{entry.degree}</p>
          <p className="ds-education__period">{entry.period}</p>
          {entry.highlights && entry.highlights.length > 0 && (
            <ul className="ds-education__highlights">
              {entry.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
