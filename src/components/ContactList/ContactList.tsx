import { profile } from '../../content';
import { Icon } from '../Icon/Icon';
import styles from './ContactList.module.css';

interface ContactListProps {
  /** "row" flows inline (homepage), "stack" is a vertical column (CV header). */
  layout?: 'row' | 'stack';
}

export function ContactList({ layout = 'row' }: ContactListProps) {
  return (
    <ul className={`${styles.list} ${styles[layout]}`}>
      {profile.contacts.map((contact) => (
        <li key={contact.kind} className={styles.item}>
          <span className={styles.icon}>
            <Icon name={contact.kind} />
          </span>
          {contact.href ? <a href={contact.href}>{contact.label}</a> : <span>{contact.label}</span>}
        </li>
      ))}
    </ul>
  );
}
