import { LanguageSwitch } from '@scottlind/cv-design-system';

export const Default = () => (
  <LanguageSwitch
    label="Language"
    items={[
      { code: 'da', href: '/da/cv' },
      { code: 'en', href: '/en/cv', current: true },
    ]}
  />
);
