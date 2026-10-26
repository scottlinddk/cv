import { describe, expect, it } from 'vitest';
import { detectLocale, switchLocalePath } from './paths';

describe('switchLocalePath', () => {
  it('swaps the locale segment and keeps the rest', () => {
    expect(switchLocalePath('/en/cv', 'da')).toBe('/da/cv');
    expect(switchLocalePath('/da', 'en')).toBe('/en');
  });
});

describe('detectLocale', () => {
  it('prefers Danish only for da browsers', () => {
    expect(detectLocale(['da-DK', 'en'])).toBe('da');
    expect(detectLocale(['en-US'])).toBe('en');
    expect(detectLocale([])).toBe('en');
  });
});
