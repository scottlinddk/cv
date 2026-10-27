const HEADLINE_LINE = /^\s*HEADLINE:[ \t]*(.*)\r?\n/i;
const MAX_HEADLINE_CHARS = 100;

/** Splits the model output into the job-specific headline and the letter text. The headline is optional. */
export function parseDraft(output: string): { headline?: string; draft: string } {
  const text = output.trim();
  const match = HEADLINE_LINE.exec(text);
  if (!match) return { draft: text };
  const headline = match[1].trim().slice(0, MAX_HEADLINE_CHARS);
  return { headline: headline || undefined, draft: text.slice(match[0].length).trim() };
}
