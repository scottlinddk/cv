import { ThemeSwitch } from '@scottlind/cv-design-system';

const options = [
  { value: 'system', label: 'Auto' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
] as const;

export const Light = () => (
  <ThemeSwitch label="Theme" options={options} value="light" onChange={() => {}} />
);

export const FollowSystem = () => (
  <ThemeSwitch label="Theme" options={options} value="system" onChange={() => {}} />
);
