import {
  ContactList,
  ExperienceList,
  Portrait,
  Section,
  SplitLayout,
} from '@scottlind/cv-design-system';

const PHOTO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><rect width="320" height="320" fill="#3a322a"/><circle cx="160" cy="125" r="58" fill="#b9ae98"/><path d="M50 320c8-80 55-120 110-120s102 40 110 120z" fill="#b9ae98"/></svg>',
  );

export const Default = () => (
  <SplitLayout
    aside={
      <>
        <Portrait src={PHOTO} alt="Scott Lind">
          <strong>Scott Lind</strong>
        </Portrait>
        <ContactList
          layout="stack"
          items={[
            { kind: 'email', label: 'hello@example.dk', href: 'mailto:hello@example.dk' },
            { kind: 'location', label: 'Klarup, Denmark' },
          ]}
        />
      </>
    }
  >
    <Section title="Experience">
      <ExperienceList
        items={[
          {
            id: 'a',
            role: 'Frontend Developer',
            company: 'Norlys Energy Trading',
            period: 'January 2026 – Present',
            highlights: ['Build data-dense React and TypeScript interfaces'],
            tech: ['React', 'TypeScript'],
          },
          {
            id: 'b',
            role: 'Frontend Architect',
            company: 'Körber Supply Chain',
            period: 'November 2025 – January 2026',
          },
        ]}
      />
    </Section>
  </SplitLayout>
);
