import { LanguageList } from '@scottlind/cv-design-system';

export const Default = () => (
  <LanguageList
    items={[
      { id: 'da', label: 'Danish', level: 'Native' },
      { id: 'en', label: 'English', level: 'Fluent' },
    ]}
  />
);
