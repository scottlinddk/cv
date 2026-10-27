import { cx } from '../../utils';
import './LinkGrid.css';

export interface LinkGridItem {
  /** Visible text. Icon-only links are not allowed: ATS parsers and screen readers need the words. */
  label: string;
  href: string;
}

export interface LinkGridProps {
  /** Accessible name of the navigation landmark, e.g. "Contact". */
  heading: string;
  items: readonly LinkGridItem[];
  className?: string;
}

/** Footer-style grid of text links in mono type, separated from the page by a hairline. */
export function LinkGrid({ heading, items, className }: LinkGridProps) {
  return (
    <nav aria-label={heading} className={cx('ds-links', className)}>
      <ul className="ds-links__list">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
