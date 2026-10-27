# Design sync notes (cv design system)

- Source of truth is `design-system/` (own `package.json`, plain CSS with `ds-` classes, no CSS modules). Paths in `.design-sync/config.json` (`cssEntry`, `extraFonts`, `tsconfig`, `srcDir`) are relative to `design-system/`, not the repo root.
- Run `npm run build:ds` before every sync (vite lib build + `tsc` declarations into `design-system/dist/`). The library entry imports `tokens.css` (no `@font-face`); fonts ship as real files via `extraFonts: tokens/fonts.css`. Do not import `styles.css` from `index.ts`: Vite inlines the fonts as base64 and the converter then ships no font files.
- Build/validate/capture: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./design-system/dist/index.es.js --out ./ds-bundle`.
- `design-system/vite.config.ts` must keep `outDir` absolute; a relative `dist` lands in the site's `dist/` and wipes it.
- Previews use an inline SVG data-URI placeholder portrait; the real photo lives in `public/photo.jpg` (not part of the DS).
- Fonts are static Geist/Geist Mono/Instrument Serif (fontsource). Variable fonts would embed Type 3 glyphs in PDFs.

## Known render warns

- `[RENDER_THIN] Icon`: icon-only preview paints SVG strokes with no text. Benign.

## Re-sync risks

- Previews hold sample CV text, not live content: harmless but they do not track `src/content`.
- Contrast: accent text uses `--ds-color-accent-text`; if the accent palette changes, re-check AA.
- First sync could not upload: no design authorization in the headless session (see PR notes). The project is not created, `projectId` is not pinned yet.
