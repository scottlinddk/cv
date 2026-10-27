import { describe, expect, it } from 'vitest';
import { htmlToText } from '../../api/_lib/htmlToText.js';

describe('htmlToText', () => {
  it('drops scripts and styles, keeps block structure and decodes entities', () => {
    const html = `<html><head><title>x</title></head><body>
      <script>alert(1)</script><style>p{}</style>
      <h1>Frontend&nbsp;Developer</h1><p>React &amp; TypeScript</p><ul><li>One</li><li>Two</li></ul>
    </body></html>`;
    expect(htmlToText(html)).toBe('Frontend Developer\nReact & TypeScript\nOne\nTwo');
  });

  it('keeps JobPosting JSON-LD for pages rendered in the browser', () => {
    const html = `<script type="application/ld+json">{"@type":"JobPosting","title":"Dev"}</script><div id="root"></div>`;
    expect(htmlToText(html)).toContain('"title":"Dev"');
  });

  it('ignores unrelated JSON-LD', () => {
    const html = `<script type="application/ld+json">{"@type":"Organization"}</script><p>Hi</p>`;
    expect(htmlToText(html)).toBe('Hi');
  });
});
