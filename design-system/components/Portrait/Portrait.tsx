import type { ReactNode } from 'react';
import { cx } from '../../utils';
import './Portrait.css';

export interface PortraitProps {
  src: string;
  /** Describe the person, e.g. their name. */
  alt: string;
  /** "page" fills its column; "sheet" is the compact size used in the A4 header. Default "page". */
  size?: 'page' | 'sheet';
  /** Optional caption under the photo, e.g. name and role. */
  children?: ReactNode;
  className?: string;
}

/** Rounded-square profile photo with an optional caption. */
export function Portrait({ src, alt, size = 'page', children, className }: PortraitProps) {
  return (
    <figure className={cx('ds-portrait', `ds-portrait--${size}`, className)}>
      <img className="ds-portrait__img" src={src} alt={alt} width={320} height={320} />
      {children && <figcaption className="ds-portrait__caption">{children}</figcaption>}
    </figure>
  );
}
