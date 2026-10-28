import type { ReactNode } from 'react';
import type { JSONContent } from '@tiptap/react';

/**
 * Renders the editor's JSON as React elements. Only the node and mark types the editor can produce are
 * handled and anything else is dropped, so pasted content can never inject markup into the letter.
 */
export function RichBody({ doc }: { doc: JSONContent }) {
  return <>{renderChildren(doc)}</>;
}

function renderChildren(node: JSONContent): ReactNode[] {
  return (node.content ?? []).map((child, index) => renderNode(child, index));
}

function renderNode(node: JSONContent, key: number): ReactNode {
  switch (node.type) {
    case 'paragraph':
      // The editor keeps an empty trailing paragraph while typing. Spacing comes from the body's gap.
      if (!node.content?.length) return null;
      return (
        <p key={key} className="ds-letter__paragraph">
          {renderChildren(node)}
        </p>
      );
    case 'heading':
      return renderHeading(node, key);
    case 'bulletList':
      return (
        <ul key={key} className="ds-letter__list">
          {renderChildren(node)}
        </ul>
      );
    case 'orderedList':
      return (
        <ol key={key} className="ds-letter__list ds-letter__list--ordered">
          {renderChildren(node)}
        </ol>
      );
    case 'listItem':
      return <li key={key}>{renderChildren(node)}</li>;
    case 'hardBreak':
      return <br key={key} />;
    case 'text':
      return renderText(node, key);
    default:
      return null;
  }
}

function renderHeading(node: JSONContent, key: number): ReactNode {
  const children = renderChildren(node);
  if (node.attrs?.level === 3) {
    return (
      <h3 key={key} className="ds-letter__heading ds-letter__heading--minor">
        {children}
      </h3>
    );
  }
  return (
    <h2 key={key} className="ds-letter__heading">
      {children}
    </h2>
  );
}

/** Pasted or typed links can carry any scheme, so only these are ever turned into a clickable href. */
const SAFE_HREF = /^(https?:|mailto:)/i;

function renderText(node: JSONContent, key: number): ReactNode {
  return (node.marks ?? []).reduce<ReactNode>((children, mark) => {
    if (mark.type === 'bold') return <strong key={key}>{children}</strong>;
    if (mark.type === 'italic') return <em key={key}>{children}</em>;
    if (mark.type === 'link') {
      const href: unknown = mark.attrs?.href;
      if (typeof href !== 'string' || !SAFE_HREF.test(href)) return children;
      return (
        <a
          key={key}
          href={href}
          className="ds-letter__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return children;
  }, node.text);
}
