import { Icon } from '@scottlind/cv-design-system';

export const AllIcons = () => (
  <div
    style={{
      display: 'flex',
      gap: '1.25rem',
      fontSize: '1.5rem',
      color: 'var(--ds-color-accent-text)',
    }}
  >
    {(['email', 'phone', 'location', 'web', 'github', 'linkedin'] as const).map((name) => (
      <Icon key={name} name={name} />
    ))}
  </div>
);
