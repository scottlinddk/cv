import {
  ContactList,
  EducationList,
  ExperienceList,
  LanguageList,
  Portrait,
  ProfileHeader,
  Section,
  Sheet,
  SkillGroups,
} from '@scottlind/cv-design-system';

const PHOTO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><rect width="320" height="320" fill="#3a322a"/><circle cx="160" cy="125" r="58" fill="#b9ae98"/><path d="M50 320c8-80 55-120 110-120s102 40 110 120z" fill="#b9ae98"/></svg>',
  );

export const Default = () => (
  <Sheet
    header={
      <ProfileHeader
        name="Scott Lind"
        role="Senior Frontend Developer"
        summary="Frontend developer with strong skills in JavaScript/TypeScript and several years of experience with .NET/C#."
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
    }
    sidebar={
      <>
        <Section title="Education">
          <EducationList
            items={[
              {
                id: 'ucn',
                institution: 'University College Nordjylland',
                degree: 'Multimedia Design',
                period: '2020 – 2022',
              },
            ]}
          />
        </Section>
        <Section title="Skills">
          <SkillGroups
            groups={[{ id: 'fe', label: 'Frontend', items: ['TypeScript', 'React', 'Vue'] }]}
          />
        </Section>
        <Section title="Languages">
          <LanguageList items={[{ id: 'da', label: 'Danish', level: 'Native' }]} />
        </Section>
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
            location: 'Denmark',
            highlights: ['Build data-dense React and TypeScript interfaces for energy trading'],
            tech: ['React', 'TypeScript'],
          },
          {
            id: 'b',
            role: 'Frontend Architect',
            company: 'Körber Supply Chain',
            period: 'November 2025 – January 2026',
            location: 'Arden, Denmark',
          },
        ]}
      />
    </Section>
  </Sheet>
);
