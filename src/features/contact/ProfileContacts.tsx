import { ContactList } from '../../../design-system/index';
import { profile } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { resolve } from '../../lib/localize';

interface ProfileContactsProps {
  layout?: 'row' | 'stack';
}

export function ProfileContacts({ layout = 'row' }: ProfileContactsProps) {
  const { locale } = useLocale();
  return (
    <ContactList
      layout={layout}
      items={profile.contacts.map((contact) => ({
        kind: contact.kind,
        label: resolve(contact.label, locale),
        href: contact.href,
      }))}
    />
  );
}
