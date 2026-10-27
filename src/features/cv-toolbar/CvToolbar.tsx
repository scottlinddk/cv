import { Link } from 'react-router';
import { Button, Toolbar } from '../../../design-system/index';
import { profile } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { AppLanguageSwitch } from '../language-switch/AppLanguageSwitch';

/** On-screen controls for the CV page. Hidden when printing and in the PDF. */
export function CvToolbar() {
  const { locale, t } = useLocale();
  const pdfHref = `${import.meta.env.BASE_URL}cv.${locale}.pdf`;

  return (
    <Toolbar
      title={`${profile.name} · CV`}
      start={<Link to={`/${locale}`}>← {t.actions.backToSite}</Link>}
    >
      <AppLanguageSwitch />
      <Button onClick={() => window.print()}>{t.actions.print}</Button>
      <Button variant="primary" href={pdfHref} download>
        {t.actions.downloadPdf}
      </Button>
    </Toolbar>
  );
}
