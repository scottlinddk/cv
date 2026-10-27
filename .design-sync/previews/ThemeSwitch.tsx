import { ThemeSwitch } from '@scottlind/cv-design-system';

export const InLightMode = () => (
  <ThemeSwitch label="Switch to dark mode" value="light" onChange={() => {}} />
);

export const InDarkMode = () => (
  <ThemeSwitch label="Switch to light mode" value="dark" onChange={() => {}} />
);
