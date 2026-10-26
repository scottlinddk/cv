import { describe, expect, it } from 'vitest';
import { formatDate, formatPeriod } from './format';

describe('formatDate', () => {
  it('formats YYYY-MM per locale', () => {
    expect(formatDate('2024-03', 'en')).toMatch(/Mar.*2024/);
    expect(formatDate('2024-03', 'da')).toMatch(/mar.*2024/);
  });
  it('passes through free-form strings', () => {
    expect(formatDate('20XX', 'en')).toBe('20XX');
  });
});

describe('formatPeriod', () => {
  it('uses the present label for open-ended periods', () => {
    expect(formatPeriod('2020', null, 'en', 'Present')).toBe('2020 – Present');
  });
});
