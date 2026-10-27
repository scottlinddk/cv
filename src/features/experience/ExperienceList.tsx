import { ExperienceList as DsExperienceList } from '../../../design-system/index';
import { experience } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { formatPeriod } from '../../lib/format';
import { resolve } from '../../lib/localize';

export function ExperienceList() {
  const { locale, t } = useLocale();

  return (
    <DsExperienceList
      items={experience.map((job) => ({
        id: job.id,
        role: job.role[locale],
        company: job.company,
        period: formatPeriod(job.start, job.end, locale, t.present),
        location: job.location ? resolve(job.location, locale) : undefined,
        summary: job.summary?.[locale],
        highlights: job.highlights[locale],
        tech: job.tech,
      }))}
    />
  );
}
