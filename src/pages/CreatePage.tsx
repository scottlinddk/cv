import { useState } from 'react';
import { Link } from 'react-router';
import { Button, Section } from '../../design-system/index';
import { LOCALES, profile, type Locale } from '../content';
import { CoverLetterDocument } from '../features/cover-letter/CoverLetterDocument';
import { ui } from '../i18n/ui';
import { detectLocale } from '../lib/paths';
import styles from './CreatePage.module.css';

/** Paste or write a cover letter (motiveret ansøgning) and export it as an A4 PDF. Nothing leaves the browser. */
export function CreatePage() {
  const locale = detectLocale(navigator.languages);
  const { create: t, nav } = ui[locale];
  // The letter has its own language, because it follows the job posting rather than the site.
  const [letterLocale, setLetterLocale] = useState<Locale>(locale);
  const [headline, setHeadline] = useState('');
  const [body, setBody] = useState('');

  const hasLetter = body.trim().length > 0;

  return (
    <>
      {/* The PDF file name defaults to the document title. */}
      <title>{hasLetter && headline ? `${profile.name} · ${headline}` : t.title}</title>
      {/* Everything except the letter preview is screen-only, so printing yields just the letter. */}
      <div className="ds-no-print">
        <header className={styles.header}>
          <Link to={`/${locale}`}>{nav.home}</Link>
        </header>
        <main className={styles.main}>
          <Section title={t.title}>
            <div className={styles.form}>
              <fieldset className={styles.modes}>
                <legend className={styles.label}>{t.letterLanguage}</legend>
                {LOCALES.map((value) => (
                  <label key={value} className={styles.mode}>
                    <input
                      type="radio"
                      name="letter-language"
                      value={value}
                      checked={letterLocale === value}
                      onChange={() => setLetterLocale(value)}
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </fieldset>
              <label className={styles.field}>
                <span className={styles.label}>{t.headlineLabel}</span>
                <input
                  className={styles.input}
                  value={headline}
                  placeholder={t.headlinePlaceholder}
                  onChange={(event) => setHeadline(event.target.value)}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>{t.bodyLabel}</span>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  rows={16}
                  value={body}
                  placeholder={t.bodyPlaceholder}
                  onChange={(event) => setBody(event.target.value)}
                />
              </label>
              {hasLetter && (
                <div>
                  <Button variant="primary" onClick={() => window.print()}>
                    {t.exportPdf}
                  </Button>
                </div>
              )}
            </div>
            <p className={styles.hint}>{t.exportHint}</p>
          </Section>
        </main>
      </div>
      {hasLetter && <CoverLetterDocument headline={headline} body={body} locale={letterLocale} />}
    </>
  );
}
