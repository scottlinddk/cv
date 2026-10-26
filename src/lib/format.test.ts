import { describe, expect, it } from 'vitest';
import { formatDate, formatPeriod, formatPeriods } from './format';

describe('formatDate', () => {
  it('formats YYYY-MM per locale', () => {
    expect(formatDate('2024-03', 'en')).toBe('March 2024');
    expect(formatDate('2024-03', 'da')).toBe('marts 2024');
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

describe('formatPeriods', () => {
  it('joins interrupted study periods', () => {
    expect(
      formatPeriods(
        [
          { start: '2014-09', end: '2016-01' },
          { start: '2018-01', end: '2019-01' },
        ],
        'en',
        'Present',
      ),
    ).toBe('September 2014 – January 2016, January 2018 – January 2019');
  });
});
