import { describe, expect, it } from 'vitest';
import { parseDraft } from '../../api/_lib/parseDraft';

describe('parseDraft', () => {
  it('splits the headline from the body', () => {
    expect(
      parseDraft('HEADLINE: Ansøgning: Senior Frontend-udvikler hos Norlys\n\nKære Norlys,\n\nHej'),
    ).toEqual({
      headline: 'Ansøgning: Senior Frontend-udvikler hos Norlys',
      draft: 'Kære Norlys,\n\nHej',
    });
  });

  it('falls back to the whole text when there is no headline line', () => {
    expect(parseDraft('  Dear team,\n\nHi  ')).toEqual({ draft: 'Dear team,\n\nHi' });
  });

  it('treats an empty headline as missing and caps the length', () => {
    expect(parseDraft('HEADLINE:   \nBody').headline).toBeUndefined();
    expect(parseDraft(`HEADLINE: ${'x'.repeat(300)}\nBody`).headline).toHaveLength(100);
  });
});
