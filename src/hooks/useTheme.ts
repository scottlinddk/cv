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
 * choice before first paint; this keeps React, <html data-theme> and <html data-fds-mode> in sync.
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

  const theme: ThemeChoice = stored ?? (systemDark ? 'dark' : 'light');

  // The Caffeine theme from @scttlnd/ui switches palette on data-fds-mode (light is the default).
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.setAttribute('data-fds-mode', 'dark');
    else root.removeAttribute('data-fds-mode');
  }, [theme]);

  const setTheme = useCallback((next: ThemeChoice) => {
    setStored(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Ignore: the choice still applies for this visit.
    }
  }, []);

  return { theme, setTheme };
}
