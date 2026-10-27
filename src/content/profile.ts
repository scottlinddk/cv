import type { Profile } from './types';

export const profile: Profile = {
  name: 'Scott Lind',
  title: {
    en: 'Senior Frontend Developer',
    da: 'Senior Frontend-udvikler',
  },
  summary: {
    en: "Frontend developer with strong skills in JavaScript/TypeScript, several years of experience with .NET/C# and experience as a project manager. With a solid technical background and the ability to raise the team's overall level through sparring and knowledge sharing. Known for my positive energy, my curiosity about new technology and my ability to find solutions that create real value for both business and end user.",
    da: 'Frontend-udvikler med stærke kompetencer i JavaScript/TypeScript, flere års erfaring med .NET/C# samt erfaring som projektleder. Med en solid teknisk baggrund og evnen til at løfte teamets samlede niveau gennem sparring og videndeling. Kendt for min positive energi, min nysgerrighed efter ny teknologi og min evne til at finde løsninger, der skaber reel værdi for både forretning og slutbruger.',
  },
  photo: 'photo.jpg',
  // The site and PDFs are public, so no phone number is listed. To add one, include
  // { kind: 'phone', label: '+45 …', href: 'tel:+45…' } below.
  contacts: [
    { kind: 'email', label: 'scttlnd@gmail.com', href: 'mailto:scttlnd@gmail.com' },
    {
      kind: 'linkedin',
      label: 'linkedin.com/in/scottlind',
      href: 'https://www.linkedin.com/in/scottlind/',
    },
    { kind: 'github', label: 'github.com/scottlinddk', href: 'https://github.com/scottlinddk/' },
    { kind: 'location', label: { en: 'Klarup, Denmark', da: 'Klarup, Danmark' } },
  ],
};
