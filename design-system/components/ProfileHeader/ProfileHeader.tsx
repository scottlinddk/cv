import type { ReactNode } from 'react';
import { cx } from '../../utils';
import './ProfileHeader.css';

export interface ProfileHeaderProps {
  name: string;
  /** Job title, shown in mono capitals under the name. */
  role: string;
  /** Short profile paragraph. */
  summary?: string;
  /** Leading slot, normally a <Portrait size="sheet" />. */
  portrait?: ReactNode;
  /** Trailing slot, e.g. a titled <ContactList layout="stack" />. */
  aside?: ReactNode;
  className?: string;
}

/** Page identity block: serif name (the one <h1>), role, summary, with optional portrait and aside. */
export function ProfileHeader({
  name,
  role,
  summary,
  portrait,
  aside,
  className,
}: ProfileHeaderProps) {
  return (
    <header
      className={cx(
        'ds-profile',
        portrait ? 'ds-profile--portrait' : null,
        aside ? 'ds-profile--aside' : null,
        className,
      )}
    >
      {portrait && <div className="ds-profile__portrait">{portrait}</div>}
      <div className="ds-profile__identity">
        <h1 className="ds-profile__name">{name}</h1>
        <p className="ds-profile__role">{role}</p>
        {summary && <p className="ds-profile__summary">{summary}</p>}
      </div>
      {aside && <div className="ds-profile__aside">{aside}</div>}
    </header>
  );
}
