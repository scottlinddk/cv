import type { ElementType } from 'react';
import { cx } from '../../utils';
import './LanguageSwitch.css';

export interface LanguageSwitchItem {
  /** Language code such as "da" or "en"; also the visible text, uppercased by CSS. */
  code: string;
  href: string;
  current?: boolean;
}

export interface LanguageSwitchProps {
  /** Accessible name of the navigation, e.g. "Language". */
  label: string;
  items: readonly LanguageSwitchItem[];
  /** Swap anchors for a router link component (receives `to`). */
  as?: ElementType;
  className?: string;
}

/** Pill group for switching the page language. The current language carries aria-current. */
export function LanguageSwitch({ label, items, as: Link, className }: LanguageSwitchProps) {
  return (
    <nav aria-label={label} className={cx('ds-langswitch', className)}>
      {items.map((item) => {
        const shared = {
          lang: item.code,
          hrefLang: item.code,
          'aria-current': item.current ? ('true' as const) : undefined,
          className: 'ds-langswitch__link',
        };
        return Link ? (
          <Link key={item.code} {...shared} to={item.href}>
            {item.code}
          </Link>
        ) : (
          <a key={item.code} {...shared} href={item.href}>
            {item.code}
          </a>
        );
      })}
    </nav>
  );
}
