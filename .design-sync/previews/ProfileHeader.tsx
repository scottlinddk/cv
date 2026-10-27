import { ContactList, Portrait, ProfileHeader, Section } from '@scottlind/cv-design-system';

const PHOTO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><rect width="320" height="320" fill="#3a322a"/><circle cx="160" cy="125" r="58" fill="#b9ae98"/><path d="M50 320c8-80 55-120 110-120s102 40 110 120z" fill="#b9ae98"/></svg>',
  );

const summary =
  'Frontend developer with strong skills in JavaScript/TypeScript, several years of experience with .NET/C# and experience as a project manager.';

export const Simple = () => (
  <ProfileHeader name="Scott Lind" role="Senior Frontend Developer" summary={summary} />
);

export const WithPortraitAndContact = () => (
  <div style={{ maxWidth: 820, fontSize: '0.8rem' }}>
    <ProfileHeader
      name="Scott Lind"
      role="Senior Frontend Developer"
      summary={summary}
      portrait={<Portrait size="sheet" src={PHOTO} alt="Scott Lind" />}
      aside={
        <Section title="Contact">
          <ContactList
            layout="stack"
            items={[
              { kind: 'email', label: 'hello@example.dk', href: 'mailto:hello@example.dk' },
              { kind: 'location', label: 'Klarup, Denmark' },
            ]}
          />
        </Section>
      }
    />
  </div>
);
