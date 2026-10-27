import type { ReactNode } from 'react';
import { cx } from '../../utils';
import './Sheet.css';

export interface SheetProps {
  /** Top panel, normally a <ProfileHeader> with portrait and aside. */
  header: ReactNode;
  /** Narrow left column: education, skills, languages. */
  sidebar: ReactNode;
  /** Main column: experience, projects. */
  children: ReactNode;
  className?: string;
}

/**
 * The A4 CV document. On screen a white card on a dotted desk; when printed or exported to PDF the
 * @page rules take over and the chrome disappears. Mobile stacks the sidebar above the main column.
 * Always paper-white, whatever the visitor's colour scheme.
 */
export function Sheet({ header, sidebar, children, className }: SheetProps) {
  return (
    <div className="ds-sheet-stage">
      <article className={cx('ds-sheet', 'ds-theme-paper', className)}>
        <div className="ds-sheet__header">{header}</div>
        <div className="ds-sheet__body">
          <aside className="ds-sheet__sidebar">{sidebar}</aside>
          <div className="ds-sheet__main">{children}</div>
        </div>
      </article>
    </div>
  );
}
