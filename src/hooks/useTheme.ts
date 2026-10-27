import { useCallback, useEffect, useState } from 'react';
import type { ThemeChoice } from '../../design-system/index';

const KEY = 'theme';

function read(): ThemeChoice {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // Storage can be blocked (private mode); fall back to following the OS.
  }
  return 'system';
}

/** The inline script in index.html applies the stored choice before first paint; this keeps it in sync. */
export function useTheme() {
  const [theme, setThemeState] = useState<ThemeChoice>(read);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = useCallback((next: ThemeChoice) => {
    setThemeState(next);
    try {
      if (next === 'system') localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, next);
    } catch {
      // Ignore: the choice still applies for this visit.
    }
  }, []);

  return { theme, setTheme };
}
