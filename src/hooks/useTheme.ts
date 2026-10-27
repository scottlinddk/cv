import { useCallback, useEffect, useState } from 'react';
import type { ThemeChoice } from '../../design-system/index';

const KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

function readStored(): ThemeChoice | null {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // Storage can be blocked (private mode); fall back to following the OS.
  }
  return null;
}

/**
 * The scheme that is showing: the visitor's saved choice, otherwise the OS preference (which keeps
 * being followed until they press the toggle). The inline script in index.html applies the stored
 * choice before first paint; this keeps React and <html data-theme> in sync.
 */
export function useTheme() {
  const [stored, setStored] = useState<ThemeChoice | null>(readStored);
  const [systemDark, setSystemDark] = useState(() => window.matchMedia(DARK_QUERY).matches);

  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (stored) root.setAttribute('data-theme', stored);
    else root.removeAttribute('data-theme');
  }, [stored]);

  const setTheme = useCallback((next: ThemeChoice) => {
    setStored(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Ignore: the choice still applies for this visit.
    }
  }, []);

  const theme: ThemeChoice = stored ?? (systemDark ? 'dark' : 'light');
  return { theme, setTheme };
}
