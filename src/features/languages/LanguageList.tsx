import { LanguageList as DsLanguageList } from '../../../design-system/index';
import { spokenLanguages } from '../../content';
import { useLocale } from '../../hooks/useLocale';

export function LanguageList() {
  const { locale } = useLocale();

  return (
    <DsLanguageList
      items={spokenLanguages.map((language) => ({
        id: language.id,
        label: language.label[locale],
        level: language.level[locale],
      }))}
    />
  );
}
