import type { Locale } from '../content';

const INTL_LOCALE: Record<Locale, string> = { da: 'da-DK', en: 'en-GB' };

/** "2024-03" becomes "March 2024" / "marts 2024"; any other string is shown as written. */
export function formatDate(value: string, locale: Locale): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return value;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
  return date.toLocaleDateString(INTL_LOCALE[locale], {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatPeriod(
  start: string,
  end: string | null,
  locale: Locale,
  presentLabel: string,
): string {
  return `${formatDate(start, locale)} – ${end ? formatDate(end, locale) : presentLabel}`;
}

export function formatPeriods(
  periods: readonly { start: string; end: string | null }[],
  locale: Locale,
  presentLabel: string,
): string {
  return periods.map((p) => formatPeriod(p.start, p.end, locale, presentLabel)).join(', ');
}
