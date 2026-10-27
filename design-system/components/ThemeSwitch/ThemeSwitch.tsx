import { cx } from '../../utils';
import './ThemeSwitch.css';

/** The colour scheme that is actually showing. */
export type ThemeChoice = 'light' | 'dark';

export interface ThemeSwitchProps {
  /** Accessible name describing the action, already translated, e.g. "Switch to dark mode". */
  label: string;
  /** The scheme currently showing (resolve "follow the OS" before passing it in). */
  value: ThemeChoice;
  onChange: (value: ThemeChoice) => void;
  className?: string;
}

// Stroke icons in the Lucide style (24x24 grid), drawn with currentColor.
const SUN = (
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </>
);
const MOON = <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />;

/**
 * Icon button that flips between light and dark. It shows the scheme you will switch to (moon in
 * light, sun in dark). Controlled: the app stores the choice and sets data-theme on <html>. Hidden
 * in print.
 */
export function ThemeSwitch({ label, value, onChange, className }: ThemeSwitchProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cx('ds-themeswitch', 'ds-no-print', className)}
      onClick={() => onChange(value === 'dark' ? 'light' : 'dark')}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="1.125rem"
        height="1.125rem"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {value === 'dark' ? SUN : MOON}
      </svg>
    </button>
  );
}
