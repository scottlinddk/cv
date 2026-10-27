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

## Design system

`design-system/` is a self-contained, content-agnostic React component library (tokens, fonts, print rules and 20 components) that the site is built from. It mixes the CV's paper sheet, the Caffeine palette (light and dark) and an editorial mono/serif look, and stays ATS-friendly, A4/PDF-ready and mobile-first. Components take plain props; `src/features/*` adapt the typed content in `src/content/` to them. Conventions for building with it are in `.design-sync/conventions.md`.

`npm run build:ds` builds the library (`design-system/dist/`) for syncing to Claude Design with `/design-sync`.

## Routes

- `/` redirects to `/da` or `/en` based on the browser language
- `/:lang` web homepage
- `/:lang/cv` the A4 CV document (screen preview, Ctrl+P source and PDF source)
- `/create` write or paste a cover letter and export it as a PDF

## Cover letter (`/create`)

A small editor for a cover letter (motiveret ansøgning). Paste or write a headline and the text, pick the letter language (da/en), and the A4 letter appears below the form. The `Letter` design-system component renders it in the same style as the CV header, and the Export PDF button opens the print dialog (choose "Save as PDF"). Only the letter is printed, everything else carries `ds-no-print`. The page is not linked from the site, and nothing is stored or sent to a server.

## How print and PDF stay identical

`/:lang/cv` is rendered by `src/features/cv-document`, styled for paper by `src/styles/print.css`
(`@page` A4, margins, page-number footer, forced light colours, page-break rules). Ctrl+P uses those
rules directly, and `scripts/build-pdf.ts` prints the same page with Chromium, so the downloadable file
and a browser print match. The Download button serves the pre-built PDF rather than generating one
client-side, which keeps text real and selectable.

Fonts are self-hosted **static** Geist, Geist Mono and Instrument Serif weights. Variable fonts make Chromium embed Type 3 glyphs, which
hurts text extraction, so avoid them for anything that ends up in the PDF.

## Editing content

Everything lives in `src/content/` as typed data. Anything user-facing is `Localized<T>`, so TypeScript
fails the build if a Danish or English string is missing. The photo is `public/photo.jpg`. Sections with no entries (projects, spoken languages) are hidden automatically.

## Deploying on Vercel

Import the repo in Vercel. `vercel.json` sets the Vite build, the SPA fallback (so `/da/cv` works on a
hard refresh) and cache headers. No environment variables are needed.

Vercel only runs `npm run build`. The downloadable PDFs are **committed** in `public/cv.da.pdf` and
`public/cv.en.pdf`, because build containers aren't a reliable place to run headless Chromium. After any
change to content or print styling, run:

```bash
npm run pdf:update   # build, render PDFs into public/, verify them
```

and commit the PDFs. CI (`npm run check:pdf`) fails if they are stale, so an outdated PDF can't ship.

For a sub-path host such as GitHub Pages, set `VITE_BASE=/cv/` and add an SPA fallback (`404.html`).
