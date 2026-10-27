import { ThemeSwitch } from '../../../design-system/index';
import { useLocale } from '../../hooks/useLocale';
import { useTheme } from '../../hooks/useTheme';

export function AppThemeSwitch() {
  const { t } = useLocale();
  const { theme, setTheme } = useTheme();

  return (
    <ThemeSwitch
      label={theme === 'dark' ? t.theme.switchToLight : t.theme.switchToDark}
      value={theme}
      onChange={setTheme}
    />
  );
}
