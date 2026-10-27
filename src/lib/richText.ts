import type { JSONContent } from '@tiptap/react';

/** True when the document has any visible text. A document of empty paragraphs counts as empty. */
export function hasText(node: JSONContent | null | undefined): boolean {
  if (!node) return false;
  if (typeof node.text === 'string' && node.text.trim().length > 0) return true;
  return node.content?.some(hasText) ?? false;
}
