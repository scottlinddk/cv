import type { Profile } from './types';

// PLACEHOLDER CONTENT: replace with your real details (and replace public/photo.svg; update `photo` if the file name changes).
export const profile: Profile = {
  name: 'Scott Lind',
  title: {
    en: 'Frontend Developer',
    da: 'Frontend-udvikler',
  },
  summary: {
    en: 'Frontend developer at Norlys Energy Trading, building data-heavy interfaces with React and TypeScript. Comfortable across the stack with C#/.NET, Umbraco and Blazor.',
    da: 'Frontend-udvikler hos Norlys Energy Trading, hvor jeg bygger datatunge brugerflader med React og TypeScript. Fortrolig med hele stakken, bl.a. C#/.NET, Umbraco og Blazor.',
  },
  photo: 'photo.svg',
  contacts: [
    { kind: 'email', label: 'scttlnd@gmail.com', href: 'mailto:scttlnd@gmail.com' },
    { kind: 'github', label: 'github.com/scottlinddk', href: 'https://github.com/scottlinddk' },
    { kind: 'location', label: 'Denmark' },
  ],
};
