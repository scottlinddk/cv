import { ContactList } from '@scottlind/cv-design-system';

const items = [
  { kind: 'email', label: 'hello@example.dk', href: 'mailto:hello@example.dk' },
  {
    kind: 'linkedin',
    label: 'linkedin.com/in/scottlind',
    href: 'https://www.linkedin.com/in/scottlind/',
  },
  { kind: 'location', label: 'Klarup, Denmark' },
] as const;

export const Stack = () => <ContactList layout="stack" items={items} />;

export const Row = () => <ContactList layout="row" items={items} />;
