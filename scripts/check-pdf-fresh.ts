/**
 * The PDFs served in production are committed in public/ (Vercel builds don't run Chromium).
 * This fails when the content or print layout changed but public/cv.*.pdf were not regenerated.
 * Compares extracted text and page count against a fresh render in dist/, since PDF bytes differ per run.
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { LOCALES } from '../src/content/types.ts';

const run = (cmd: string, ...args: string[]) => execFileSync(cmd, args, { encoding: 'utf8' });
const summary = (file: string) => ({
  pages: /Pages:\s+(\d+)/.exec(run('pdfinfo', file))?.[1],
  text: run('pdftotext', '-layout', file, '-').replace(/\s+/g, ''),
});

let stale = false;
for (const lang of LOCALES) {
  const committed = path.resolve('public', `cv.${lang}.pdf`);
  const fresh = path.resolve('dist', `cv.${lang}.pdf`);
  if (!existsSync(committed)) {
    console.log(`FAIL public/cv.${lang}.pdf is missing`);
    stale = true;
    continue;
  }
  const a = summary(committed);
  const b = summary(fresh);
  const same = a.pages === b.pages && a.text === b.text;
  console.log(`${same ? 'ok  ' : 'FAIL'} public/cv.${lang}.pdf is up to date`);
  if (!same) stale = true;
}

if (stale) console.log('\nRun `npm run pdf:update` and commit the regenerated PDFs.');
process.exit(stale ? 1 : 0);
