import { Portrait } from '@scottlind/cv-design-system';

const PHOTO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><rect width="320" height="320" fill="#3a322a"/><circle cx="160" cy="125" r="58" fill="#b9ae98"/><path d="M50 320c8-80 55-120 110-120s102 40 110 120z" fill="#b9ae98"/></svg>',
  );

export const Page = () => (
  <div style={{ width: 280 }}>
    <Portrait src={PHOTO} alt="Scott Lind">
      <strong>Scott Lind</strong>
      <br />
      <span
        style={{
          color: 'var(--ds-color-muted)',
          fontFamily: 'var(--ds-font-mono)',
          fontSize: '0.8125rem',
          textTransform: 'uppercase',
        }}
      >
        Senior Frontend Developer
      </span>
    </Portrait>
  </div>
);

export const Sheet = () => <Portrait size="sheet" src={PHOTO} alt="Scott Lind" />;
