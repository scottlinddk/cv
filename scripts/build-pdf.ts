/**
 * Renders the /:lang/cv page of the built site to dist/cv.<lang>.pdf with headless Chromium.
 * Run after `npm run build`. The PDF uses the exact same print CSS as Ctrl+P.
 *
 * Set CHROMIUM_PATH to use a specific Chromium binary instead of Playwright's own.
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { preview } from 'vite';
import { LOCALES } from '../src/content/types.ts';

// `--out <dir>` chooses where the PDFs are written (default dist). The site is always served from dist.
const outFlag = process.argv.indexOf('--out');
const OUT = path.resolve(outFlag > -1 ? (process.argv[outFlag + 1] ?? 'dist') : 'dist');

const server = await preview({
  preview: { host: '127.0.0.1', port: 4173, strictPort: false, open: false },
});
const origin = server.resolvedUrls?.local[0];
if (!origin) throw new Error('Preview server did not start');

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });

try {
  await mkdir(OUT, { recursive: true });
  const context = await browser.newContext({ colorScheme: 'light', locale: 'en' });

  for (const lang of LOCALES) {
    const page = await context.newPage();
    await page.goto(new URL(`${lang}/cv`, origin).href, { waitUntil: 'networkidle' });
    await page.waitForSelector('article');
    // Fonts and images must be fully loaded, otherwise the PDF falls back to system fonts.
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(
        [...document.images].map((img) => (img.complete ? null : img.decode().catch(() => null))),
      );
    });
    await page.emulateMedia({ media: 'print' });

    const file = path.join(OUT, `cv.${lang}.pdf`);
    await page.pdf({
      path: file,
      preferCSSPageSize: true, // honour @page { size: A4 }
      printBackground: true,
      tagged: true, // accessible, searchable structure
      outline: true, // bookmarks from headings
    });
    console.log(`wrote ${path.relative(process.cwd(), file)}`);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise<void>((resolve) => server.httpServer.close(() => resolve()));
}
