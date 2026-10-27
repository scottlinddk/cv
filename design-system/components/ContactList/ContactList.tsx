import { cx } from '../../utils';
import { Icon, type IconName } from '../Icon/Icon';
import './ContactList.css';

export interface ContactItem {
  kind: IconName;
  /** Visible text. Always provide it: it is what ATS parsers and the PDF text layer read. */
  label: string;
  href?: string;
}

export interface ContactListProps {
  items: readonly ContactItem[];
  /** "row" flows inline, "stack" is a vertical column. Default "row". */
  layout?: 'row' | 'stack';
  className?: string;
}

/** Contact details as an icon + text list. Links are real anchors; the icon is decoration only. */
export function ContactList({ items, layout = 'row', className }: ContactListProps) {
  return (
    <ul className={cx('ds-contacts', `ds-contacts--${layout}`, className)}>
      {items.map((item) => (
        <li key={item.kind} className="ds-contacts__item">
          <span className="ds-contacts__icon">
            <Icon name={item.kind} />
          </span>
          {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
        </li>
      ))}
    </ul>
  );
}
