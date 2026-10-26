import { Link } from 'react-router';
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';
import { useLocale } from '../../hooks/useLocale';
import styles from './Toolbar.module.css';

/** On-screen controls for the CV page. Hidden when printing and in the PDF. */
export function Toolbar() {
  const { locale, t } = useLocale();
  const pdfHref = `${import.meta.env.BASE_URL}cv.${locale}.pdf`;

  return (
    <div className={`${styles.toolbar} no-print`}>
      <Link to={`/${locale}`} className={styles.back}>
        ← {t.actions.backToSite}
      </Link>
      <div className={styles.actions}>
        <LanguageSwitch />
        <button type="button" className={styles.button} onClick={() => window.print()}>
          {t.actions.print}
        </button>
        <a className={`${styles.button} ${styles.primary}`} href={pdfHref} download>
          {t.actions.downloadPdf}
        </a>
      </div>
    </div>
  );
}
