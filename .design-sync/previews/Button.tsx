import { Button } from '@scottlind/cv-design-system';

export const Variants = () => (
  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
    <Button variant="primary" href="/en/cv">
      View CV
    </Button>
    <Button href="/cv.en.pdf" download>
      Download PDF
    </Button>
    <Button onClick={() => {}}>Print</Button>
  </div>
);
