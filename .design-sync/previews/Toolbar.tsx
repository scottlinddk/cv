import { Button, LanguageSwitch, Toolbar } from '@scottlind/cv-design-system';

export const Default = () => (
  <div style={{ minWidth: 640 }}>
    <Toolbar title="Scott Lind · CV" start={<a href="/en">← Back to site</a>}>
      <LanguageSwitch
        label="Language"
        items={[
          { code: 'da', href: '/da/cv' },
          { code: 'en', href: '/en/cv', current: true },
        ]}
      />
      <Button onClick={() => {}}>Print</Button>
      <Button variant="primary" href="/cv.en.pdf" download>
        Download PDF
      </Button>
    </Toolbar>
  </div>
);
