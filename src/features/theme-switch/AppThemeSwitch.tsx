import { ThemeSwitch } from '../../../design-system/index';
import { useLocale } from '../../hooks/useLocale';
import { useTheme } from '../../hooks/useTheme';

export function AppThemeSwitch() {
  const { t } = useLocale();
  const { theme, setTheme } = useTheme();

  return (
    <ThemeSwitch
      label={t.theme.label}
      value={theme}
      onChange={setTheme}
      options={[
        { value: 'system', label: t.theme.system },
        { value: 'light', label: t.theme.light },
        { value: 'dark', label: t.theme.dark },
      ]}
    />
  );
}
