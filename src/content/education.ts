import type { Education } from './types';

export const education: Education[] = [
  {
    id: 'ucn',
    institution: 'University College Nordjylland',
    degree: { en: 'Multimedia Design', da: 'Multimediedesign' },
    periods: [{ start: '2020-09', end: '2022-06' }],
    highlights: {
      en: [
        'Focus on digital communication, UX design and frontend development',
        'Project management',
      ],
      da: ['Fokus på digital kommunikation, UX design og frontend-udvikling', 'Projektledelse'],
    },
  },
  {
    id: 'aau',
    institution: 'Aalborg University',
    degree: {
      en: 'Bachelor of Science in Interaction Design',
      da: 'Bachelor of Science in Interaction Design',
    },
    periods: [
      { start: '2014-09', end: '2016-01' },
      { start: '2018-01', end: '2019-01' },
    ],
    highlights: {
      en: [
        'Studied user behaviour, digital experience design and the interplay between people and technology, a solid foundation for user-driven product development',
      ],
      da: [
        'Undersøgte brugeradfærd, digitalt oplevelsesdesign og samspillet mellem mennesker og teknologi, et solidt fundament for brugerdrevet produktudvikling',
      ],
    },
  },
];
