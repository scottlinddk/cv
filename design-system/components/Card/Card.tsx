import type { ReactNode } from 'react';
import { cx } from '../../utils';
import './Card.css';

export interface CardProps {
  /** Small mono caption at the top of the card. Rendered as a heading. */
  title: string;
  /** Heading level for the title, default 3. */
  headingLevel?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

/**
 * Dark rounded card with a mono caption. On screen it is ink-coloured; in print and PDF it turns
 * into an outlined white card so it saves ink and survives greyscale.
 */
export function Card({ title, headingLevel = 3, children, className }: CardProps) {
  const Heading = `h${headingLevel}` as const;
  return (
    <div className={cx('ds-card', className)}>
      <Heading className="ds-card__title">{title}</Heading>
      <div className="ds-card__body">{children}</div>
    </div>
  );
}
