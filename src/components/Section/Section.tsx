import { useId, type ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className }: SectionProps) {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className={[styles.section, className].filter(Boolean).join(' ')}
    >
      <h2 id={headingId} className={styles.heading}>
        {title}
      </h2>
      {children}
    </section>
  );
}
