import { education, experience, profile, skillGroups, spokenLanguages } from '../../content';
import { formatPeriod, formatPeriods } from '../../lib/format';
import { resolve } from '../../lib/localize';

/**
 * Plain-text summary of the CV that the model writes from. Always English: the draft's language
 * follows the job posting, and the facts are identical in both locales.
 */
export function buildCandidateProfile(): string {
  const locale = 'en';
  const lines: string[] = [
    `Name: ${profile.name}`,
    `Title: ${profile.title[locale]}`,
    `Location: ${resolve(profile.contacts.find((c) => c.kind === 'location')?.label ?? '', locale)}`,
    `Summary: ${profile.summary[locale]}`,
    '',
    'Experience:',
  ];

  for (const job of experience) {
    lines.push(
      `- ${job.role[locale]}, ${job.company} (${formatPeriod(job.start, job.end, locale, 'present')})`,
    );
    if (job.summary) lines.push(`  ${job.summary[locale]}`);
    for (const highlight of job.highlights[locale]) lines.push(`  * ${highlight}`);
    if (job.tech.length > 0) lines.push(`  Tech: ${job.tech.join(', ')}`);
  }

  lines.push('', 'Skills:');
  for (const group of skillGroups) {
    lines.push(
      `- ${group.label[locale]}: ${group.items.map((i) => resolve(i, locale)).join(', ')}`,
    );
  }

  lines.push('', 'Education:');
  for (const item of education) {
    lines.push(
      `- ${item.degree[locale]}, ${item.institution} (${formatPeriods(item.periods, locale, 'present')})`,
    );
  }

  if (spokenLanguages.length > 0) {
    lines.push(
      '',
      `Languages: ${spokenLanguages.map((l) => `${l.label[locale]} (${l.level[locale]})`).join(', ')}`,
    );
  }

  return lines.join('\n');
}
