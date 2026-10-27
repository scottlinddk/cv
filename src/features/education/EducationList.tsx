import { EducationList as DsEducationList } from '../../../design-system/index';
import { education } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { formatPeriods } from '../../lib/format';

export function EducationList() {
  const { locale, t } = useLocale();

  return (
    <DsEducationList
      items={education.map((entry) => ({
        id: entry.id,
        institution: entry.institution,
        degree: entry.degree[locale],
        period: formatPeriods(entry.periods, locale, t.present),
        highlights: entry.highlights?.[locale],
      }))}
    />
  );
}
