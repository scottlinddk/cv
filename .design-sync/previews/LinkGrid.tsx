import { LinkGrid } from '@scottlind/cv-design-system';

export const Default = () => (
  <LinkGrid
    heading="Contact"
    items={[
      { label: 'hello@example.dk', href: 'mailto:hello@example.dk' },
      { label: 'linkedin.com/in/scottlind', href: 'https://www.linkedin.com/in/scottlind/' },
      { label: 'github.com/scottlinddk', href: 'https://github.com/scottlinddk' },
    ]}
  />
);
