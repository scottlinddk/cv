import { cx } from '../../utils';
import './ThemeSwitch.css';

export type ThemeChoice = 'system' | 'light' | 'dark';

export interface ThemeSwitchOption {
  value: ThemeChoice;
  /** Visible, translated text, e.g. "Light". */
  label: string;
}

export interface ThemeSwitchProps {
  /** Accessible name of the group, e.g. "Theme". */
  label: string;
  options: readonly ThemeSwitchOption[];
  value: ThemeChoice;
  onChange: (value: ThemeChoice) => void;
  className?: string;
}

/**
 * Pill group for choosing system, light or dark colours. Controlled: the app stores the choice and
 * sets data-theme on <html> ("light" or "dark"; no attribute means follow the OS). Hidden in print.
 */
export function ThemeSwitch({ label, options, value, onChange, className }: ThemeSwitchProps) {
  return (
    <div role="group" aria-label={label} className={cx('ds-themeswitch', 'ds-no-print', className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={option.value === value}
          className="ds-themeswitch__option"
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
