/** Splits plain text into paragraphs on blank lines. Single line breaks (e.g. a sign-off) are kept inside a paragraph. */
export function splitParagraphs(text: string): string[] {
  return text
    .replace(/\r\n?/g, '\n')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
