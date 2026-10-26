import { Link } from 'react-router';
import { profile } from '../../content';
import { ContactList } from '../../components/ContactList/ContactList';
import { assetUrl } from '../../lib/assets';
import { useLocale } from '../../hooks/useLocale';
import styles from './Hero.module.css';

export function Hero() {
  const { locale, t } = useLocale();
  const pdfHref = `${import.meta.env.BASE_URL}cv.${locale}.pdf`;

  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <img
        className={styles.photo}
        src={assetUrl(profile.photo)}
        alt={profile.name}
        width={160}
        height={160}
      />
      <div>
        <h1 id="hero-name" className={styles.name}>
          {profile.name}
        </h1>
        <p className={styles.title}>{profile.title[locale]}</p>
        <p className={styles.summary}>{profile.summary[locale]}</p>
        <ContactList />
        <p className={styles.actions}>
          <Link className={styles.primary} to={`/${locale}/cv`}>
            {t.actions.viewCv}
          </Link>
          <a className={styles.secondary} href={pdfHref} download>
            {t.actions.downloadPdf}
          </a>
        </p>
      </div>
    </section>
  );
}
