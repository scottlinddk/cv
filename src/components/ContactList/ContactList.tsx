import { profile } from '../../content';
import styles from './ContactList.module.css';

export function ContactList({ className }: { className?: string }) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(' ')}>
      {profile.contacts.map((contact) => (
        <li key={contact.kind}>
          {contact.href ? <a href={contact.href}>{contact.label}</a> : contact.label}
        </li>
      ))}
    </ul>
  );
}
