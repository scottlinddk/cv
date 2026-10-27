import { TagList } from '../TagList/TagList';
import { cx } from '../../utils';
import './ExperienceList.css';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  /** Pre-formatted period, e.g. "Jan 2026 – Present". */
  period: string;
  location?: string;
  summary?: string;
  highlights?: readonly string[];
  tech?: readonly string[];
}

export interface ExperienceListProps {
  /** Newest first. Order is the reading order for ATS parsers. */
  items: readonly ExperienceItem[];
  className?: string;
}

/**
 * Work history as hairline-separated rows. Each row reads role, company, period, then details,
 * and is never split across a printed page. Side by side on desktop, stacked on mobile.
 */
export function ExperienceList({ items, className }: ExperienceListProps) {
  return (
    <ol className={cx('ds-experience', className)}>
      {items.map((job) => (
        <li key={job.id} className="ds-experience__item">
          <h3 className="ds-experience__role">
            {job.role}, <span className="ds-experience__company">{job.company}</span>
          </h3>
          <p className="ds-experience__period">{job.period}</p>
          {job.location && <p className="ds-experience__location">{job.location}</p>}
          {job.summary && <p className="ds-experience__summary">{job.summary}</p>}
          {job.highlights && job.highlights.length > 0 && (
            <ul className="ds-experience__highlights">
              {job.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
          {job.tech && job.tech.length > 0 && <TagList items={job.tech} />}
        </li>
      ))}
    </ol>
  );
}
