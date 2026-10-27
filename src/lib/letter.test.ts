import { describe, expect, it } from 'vitest';
import { splitParagraphs } from './letter';

describe('splitParagraphs', () => {
  it('splits on blank lines and trims', () => {
    expect(splitParagraphs('Hi,\n\n  First.  \n\n\nSecond.\n\n')).toEqual([
      'Hi,',
      'First.',
      'Second.',
    ]);
  });

  it('keeps single line breaks inside a paragraph', () => {
    expect(splitParagraphs('Best regards,\nScott Lind')).toEqual(['Best regards,\nScott Lind']);
  });

  it('handles Windows line endings and empty input', () => {
    expect(splitParagraphs('A\r\n\r\nB')).toEqual(['A', 'B']);
    expect(splitParagraphs('  \n ')).toEqual([]);
  });
});
