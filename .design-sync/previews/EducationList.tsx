import { EducationList } from '@scottlind/cv-design-system';

export const Default = () => (
  <EducationList
    items={[
      {
        id: 'ucn',
        institution: 'University College Nordjylland',
        degree: 'Multimedia Design',
        period: 'September 2020 – June 2022',
        highlights: ['Digital communication, UX design and frontend development'],
      },
      {
        id: 'aau',
        institution: 'Aalborg University',
        degree: 'Bachelor of Science in Interaction Design',
        period: 'September 2014 – January 2019',
      },
    ]}
  />
);
