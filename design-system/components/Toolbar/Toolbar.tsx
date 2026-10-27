import type { ReactNode } from 'react';
import { cx } from '../../utils';
import './Toolbar.css';

export interface ToolbarProps {
  /** Leading slot, e.g. a "Back to site" link. */
  start?: ReactNode;
  /** Centre label, hidden on narrow screens. */
  title?: string;
  /** Trailing slot: LanguageSwitch, Print and Download buttons. */
  children?: ReactNode;
  className?: string;
}

/** Sticky on-screen control bar for the CV page. Carries .ds-no-print so it never reaches paper or PDF. */
export function Toolbar({ start, title, children, className }: ToolbarProps) {
  return (
    <div className={cx('ds-toolbar', 'ds-no-print', className)}>
      <div className="ds-toolbar__start">{start}</div>
      {title && <p className="ds-toolbar__title">{title}</p>}
      <div className="ds-toolbar__actions">{children}</div>
    </div>
  );
}
