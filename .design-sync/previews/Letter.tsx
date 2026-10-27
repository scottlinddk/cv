import { ContactList, Letter } from '@scottlind/cv-design-system';

export const Default = () => (
  <Letter
    lang="en"
    headline="Cover letter: Senior Frontend Developer"
    kicker="Scott Lind · Senior Frontend Developer"
    paragraphs={[
      'Dear hiring team,',
      'I am applying for the role of Senior Frontend Developer. I work daily with React and TypeScript, and I enjoy raising the level of a team through sparring and knowledge sharing.',
      'Best regards,\nScott Lind',
    ]}
    footer={
      <ContactList
        items={[
          { kind: 'email', label: 'scttlnd@gmail.com', href: 'mailto:scttlnd@gmail.com' },
          { kind: 'location', label: 'Klarup, Denmark' },
        ]}
      />
    }
  />
);
