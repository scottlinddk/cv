import { SkillGroups as DsSkillGroups } from '../../../design-system/index';
import { skillGroups } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { resolve } from '../../lib/localize';

interface SkillGroupsProps {
  variant?: 'list' | 'cards';
}

export function SkillGroups({ variant = 'list' }: SkillGroupsProps) {
  const { locale } = useLocale();

  return (
    <DsSkillGroups
      variant={variant}
      groups={skillGroups.map((group) => ({
        id: group.id,
        label: group.label[locale],
        items: group.items.map((item) => resolve(item, locale)),
      }))}
    />
  );
}
