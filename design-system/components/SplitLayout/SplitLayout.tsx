import type { ReactNode } from 'react';
import { cx } from '../../utils';
import './SplitLayout.css';

export interface SplitLayoutProps {
  /** Left column, normally <Portrait> and <ContactList>. Sticky on desktop, first on mobile. */
  aside: ReactNode;
  /** Main column content: a stack of <Section>s. */
  children: ReactNode;
  className?: string;
}

/**
 * Responsive two-column page body: narrow aside on the left, main column on the right. Collapses
 * to one column below 48rem with the aside first. Source order is aside, then main.
 */
export function SplitLayout({ aside, children, className }: SplitLayoutProps) {
  return (
    <div className={cx('ds-split', className)}>
      <aside className="ds-split__aside">{aside}</aside>
      <div className="ds-split__main">{children}</div>
    </div>
  );
}
