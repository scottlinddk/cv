/**
 * Sanity-checks the generated PDFs with poppler-utils (pdfinfo, pdffonts, pdftotext):
 * A4, tagged, language set, fonts embedded, text selectable and in the right language.
 */
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { LOCALES } from '../src/content/types.ts';
import { profile } from '../src/content/profile.ts';
import { ui } from '../src/i18n/ui.ts';

const run = (cmd: string, ...args: string[]) => execFileSync(cmd, args, { encoding: 'utf8' });
let failed = false;

function check(label: string, ok: boolean, detail = '') {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}${detail ? ` (${detail})` : ''}`);
  if (!ok) failed = true;
}

for (const lang of LOCALES) {
  const file = path.resolve('dist', `cv.${lang}.pdf`);
  console.log(`\n${path.basename(file)}`);

  const info = run('pdfinfo', file);
  const pageSize = /Page size:\s+(.+)/.exec(info)?.[1] ?? '';
  check('A4 page size', /\(A4\)/.test(pageSize), pageSize.trim());
  check('tagged PDF', /Tagged:\s+yes/.test(info));
  check('title set', new RegExp(profile.name).test(/Title:\s+(.*)/.exec(info)?.[1] ?? ''));

  const fonts = run('pdffonts', file).split('\n').slice(2).filter(Boolean);
  check(
    'fonts embedded',
    fonts.length > 0 &&
      fonts.every((line) => /\syes\s+(yes|no)\s/.test(line) && !/Type 3/.test(line)),
  );

  const text = run('pdftotext', '-layout', file, '-');
  check('text selectable', text.includes(profile.name));
  // Letter-spaced uppercase headings can be extracted as "E X P E R I E N C E", so ignore whitespace.
  const squash = (value: string) => value.replace(/\s+/g, '').toUpperCase();
  const heading = ui[lang].sections.experience;
  check(
    'localized headings',
    squash(text).includes(squash(heading)),
    squash(text).includes(squash(heading))
      ? ''
      : `expected "${heading}", got: ${text.slice(0, 400)}`,
  );
  check('page number footer', /\d+\s*\/\s*\d+/.test(text));
}

process.exit(failed ? 1 : 0);
