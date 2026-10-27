import { LinkGrid } from '../../../design-system/index';
import { profile } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { resolve } from '../../lib/localize';

/** Text-labelled contact links. Only entries with a link are shown (the location is not a link). */
export function SiteFooter() {
  const { locale, t } = useLocale();
  const items = profile.contacts.flatMap((contact) =>
    contact.href ? [{ label: resolve(contact.label, locale), href: contact.href }] : [],
  );
  return <LinkGrid heading={t.sections.contact} items={items} />;
}
