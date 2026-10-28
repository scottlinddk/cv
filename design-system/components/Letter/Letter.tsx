import type { ReactNode } from 'react';
import { cx } from '../../utils';
import '../Sheet/Sheet.css';
import './Letter.css';

export interface LetterProps {
  /** Letter headline, the one <h1>. Shown in the serif display face. */
  headline: string;
  /** Mono capitals line under the headline, e.g. "Scott Lind · Senior Frontend Developer". */
  kicker?: string;
  /** Body text, one entry per paragraph. Use `children` instead for formatted text. */
  paragraphs?: readonly string[];
  /** Formatted body (`<p className="ds-letter__paragraph">`, `<ul className="ds-letter__list">`), rendered after any `paragraphs`. */
  children?: ReactNode;
  /** Optional closing block, e.g. a <ContactList />. */
  footer?: ReactNode;
  /** Language of the text (BCP 47), set on the document so the PDF is tagged correctly. */
  lang?: string;
  className?: string;
}

/**
 * A one-page cover letter on the A4 sheet. Same headline, role line and body styling as
 * <ProfileHeader />, so the letter and the CV read as one set. Paper-white on screen and in print.
 */
export function Letter({
  headline,
  kicker,
  paragraphs = [],
  children,
  footer,
  lang,
  className,
}: LetterProps) {
  return (
    <div className="ds-sheet-stage">
      <article lang={lang} className={cx('ds-sheet', 'ds-theme-paper', 'ds-letter', className)}>
        <header className="ds-letter__head">
          <h1 className="ds-letter__headline">{headline}</h1>
          {kicker && <p className="ds-letter__kicker">{kicker}</p>}
        </header>
        <div className="ds-letter__body">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="ds-letter__paragraph">
              {paragraph}
            </p>
          ))}
          {children}
        </div>
        {footer && <footer className="ds-letter__footer">{footer}</footer>}
      </article>
    </div>
  );
}
