/** Resolves a file in /public against the configured base path (e.g. "/cv/" on GitHub Pages). */
export const assetUrl = (file: string): string =>
  `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`;
