import type { JSONContent } from '@tiptap/react';
import { ContactList, Letter } from '../../../design-system/index';
import { profile } from '../../content';
import type { Locale } from '../../content';
import { resolve } from '../../lib/localize';
import { RichBody } from './RichBody';

interface CoverLetterDocumentProps {
  headline: string;
  /** Role title shown after the name; empty shows the name alone. */
  role: string;
  body: JSONContent;
  /** Language of the letter, which follows the job posting and can differ from the site language. */
  locale: Locale;
}

/** The cover letter as an A4 document: profile identity as the role line, contact details as the footer. */
export function CoverLetterDocument({ headline, role, body, locale }: CoverLetterDocumentProps) {
  return (
    <Letter
      lang={locale}
      headline={headline}
      kicker={role.trim() ? `${profile.name} · ${role.trim()}` : profile.name}
      footer={
        <ContactList
          items={profile.contacts.map((contact) => ({
            kind: contact.kind,
            label: resolve(contact.label, locale),
            href: contact.href,
          }))}
        />
      }
    >
      <RichBody doc={body} />
    </Letter>
  );
}
