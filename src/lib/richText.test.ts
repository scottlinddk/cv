import { describe, expect, it } from 'vitest';
import { hasText } from './richText';

describe('hasText', () => {
  it('is false for missing and empty documents', () => {
    expect(hasText(null)).toBe(false);
    expect(hasText({ type: 'doc', content: [{ type: 'paragraph' }] })).toBe(false);
  });

  it('ignores whitespace-only text', () => {
    const doc = {
      type: 'doc',
      content: [{ type: 'paragraph', content: [{ type: 'text', text: '  ' }] }],
    };
    expect(hasText(doc)).toBe(false);
  });

  it('finds text nested in lists', () => {
    const doc = {
      type: 'doc',
      content: [
        {
          type: 'bulletList',
          content: [
            {
              type: 'listItem',
              content: [{ type: 'paragraph', content: [{ type: 'text', text: 'React' }] }],
            },
          ],
        },
      ],
    };
    expect(hasText(doc)).toBe(true);
  });
});
