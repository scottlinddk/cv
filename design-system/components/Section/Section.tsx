import { useId, type ReactNode } from 'react';
import { cx } from '../../utils';
import './Section.css';

export interface SectionProps {
  /** Heading text. Rendered in mono capitals via CSS; the DOM text keeps its normal case for ATS. */
  title: string;
  /** Small caption above the title, e.g. a section number. Optional. */
  eyebrow?: string;
  /** Heading level, default 2. Use 3 when nesting inside another Section. */
  headingLevel?: 2 | 3;
  children: ReactNode;
  className?: string;
}

/** Titled content block: a labelled region with a mono-caps heading. Every CV block sits in one. */
export function Section({ title, eyebrow, headingLevel = 2, children, className }: SectionProps) {
  const headingId = useId();
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <section aria-labelledby={headingId} className={cx('ds-section', className)}>
      {eyebrow && <p className="ds-section__eyebrow">{eyebrow}</p>}
      <Heading id={headingId} className="ds-section__title">
        {title}
      </Heading>
      {children}
    </section>
  );
}
