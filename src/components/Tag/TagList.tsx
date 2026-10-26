import styles from './TagList.module.css';

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  );
}
