# CV

Personal CV website (React + TypeScript + Vite) with print-perfect output and build-time PDF export.
Danish and English. Content lives in `src/content/` (Danish and English).

## Commands

| Command                                        | What it does                                                         |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| `npm run dev`                                  | Dev server (the PDF download link only works after `npm run pdf`)    |
| `npm run build`                                | Typecheck and build the site to `dist/`                              |
| `npm run pdf`                                  | Render `dist/cv.da.pdf` and `dist/cv.en.pdf` with headless Chromium  |
| `npm run verify:pdf`                           | Check A4, tagged, embedded non-Type-3 fonts, selectable text, footer |
| `npm run build:all`                            | build + pdf + verify                                                 |
| `npm run lint` / `npm test` / `npm run format` | Quality tooling                                                      |

First time on a machine: `npx playwright install chromium` (set `CHROMIUM_PATH` to use another Chromium).

## Routes

- `/` redirects to `/da` or `/en` based on the browser language
- `/:lang` web homepage
- `/:lang/cv` the A4 CV document (screen preview, Ctrl+P source and PDF source)

## How print and PDF stay identical

`/:lang/cv` is rendered by `src/features/cv-document`, styled for paper by `src/styles/print.css`
(`@page` A4, margins, page-number footer, forced light colours, page-break rules). Ctrl+P uses those
rules directly, and `scripts/build-pdf.ts` prints the same page with Chromium, so the downloadable file
and a browser print match. The Download button serves the pre-built PDF rather than generating one
client-side, which keeps text real and selectable.

Fonts are self-hosted **static** Inter weights. Variable fonts make Chromium embed Type 3 glyphs, which
hurts text extraction, so avoid them for anything that ends up in the PDF.

## Editing content

Everything lives in `src/content/` as typed data. Anything user-facing is `Localized<T>`, so TypeScript
fails the build if a Danish or English string is missing. The photo is `public/photo.jpg`. Sections with no entries (projects, spoken languages) are hidden automatically.

## Hosting under a sub-path

Set `VITE_BASE=/cv/` for build and pdf (for example on GitHub Pages) and add an SPA fallback (`404.html`).
