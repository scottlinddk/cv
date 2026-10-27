import { Card } from '../Card/Card';
import { TagList } from '../TagList/TagList';
import { cx } from '../../utils';
import './SkillGroups.css';

export interface SkillGroup {
  id: string;
  label: string;
  items: readonly string[];
}

export interface SkillGroupsProps {
  groups: readonly SkillGroup[];
  /** "list" is a compact label + tags stack (A4 sidebar); "cards" is a grid of dark Cards. Default "list". */
  variant?: 'list' | 'cards';
  className?: string;
}

/** Skills grouped by theme. Use "cards" on wide web pages and "list" in narrow columns and print. */
export function SkillGroups({ groups, variant = 'list', className }: SkillGroupsProps) {
  return (
    <div className={cx('ds-skills', `ds-skills--${variant}`, className)}>
      {groups.map((group) =>
        variant === 'cards' ? (
          <Card key={group.id} title={group.label}>
            <TagList items={group.items} />
          </Card>
        ) : (
          <div key={group.id} className="ds-skills__group">
            <h3 className="ds-skills__label">{group.label}</h3>
            <TagList items={group.items} />
          </div>
        ),
      )}
    </div>
  );
}
