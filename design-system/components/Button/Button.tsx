import type { ElementType, ReactNode } from 'react';
import { cx } from '../../utils';
import './Button.css';

export interface ButtonProps {
  children: ReactNode;
  /** "primary" is filled with the accent colour, "secondary" is outlined. Default "secondary". */
  variant?: 'primary' | 'secondary';
  /** Renders an anchor when set, a <button type="button"> otherwise. */
  href?: string;
  /** Anchor only: offer the target as a download. */
  download?: boolean;
  /** Button only. */
  onClick?: () => void;
  /** Swap the anchor for a router link component, e.g. react-router's Link (it receives `to`). */
  as?: ElementType;
  className?: string;
}

/** Pill button for actions (View CV, Download PDF, Print). Renders an anchor with href, else a button. */
export function Button({
  children,
  variant = 'secondary',
  href,
  download,
  onClick,
  as,
  className,
}: ButtonProps) {
  const cls = cx('ds-button', `ds-button--${variant}`, className);
  if (as && href) {
    const Link = as;
    return (
      <Link className={cls} to={href}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={cls} href={href} download={download || undefined}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
