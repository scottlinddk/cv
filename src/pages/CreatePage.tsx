import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { Button, Section } from '../../design-system/index';
import { useApplicationDraft } from '../features/application-draft/useApplicationDraft';
import { ui } from '../i18n/ui';
import { detectLocale } from '../lib/paths';
import styles from './CreatePage.module.css';

export function CreatePage() {
  const locale = detectLocale(navigator.languages);
  const { create: t, nav } = ui[locale];
  const { state, generate } = useApplicationDraft();
  const [url, setUrl] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [copied, setCopied] = useState(false);

  const loading = state.status === 'loading';
  const needsCode = state.status === 'error' && state.code === 'unauthorized';

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setCopied(false);
    void generate(url.trim(), accessCode || undefined);
  }

  async function copy(draft: string) {
    await navigator.clipboard.writeText(draft);
    setCopied(true);
  }

  return (
    <>
      <title>{t.title}</title>
      <header className={styles.header}>
        <Link to={`/${locale}`}>{nav.home}</Link>
      </header>
      <main className={styles.main}>
        <Section title={t.title}>
          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>{t.urlLabel}</span>
              <input
                className={styles.input}
                type="url"
                inputMode="url"
                required
                value={url}
                placeholder={t.urlPlaceholder}
                onChange={(event) => setUrl(event.target.value)}
              />
            </label>
            {needsCode && (
              <label className={styles.field}>
                <span className={styles.label}>{t.accessCodeLabel}</span>
                <input
                  className={styles.input}
                  type="password"
                  autoComplete="off"
                  value={accessCode}
                  onChange={(event) => setAccessCode(event.target.value)}
                />
              </label>
            )}
            <div>
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? t.loading : t.submit}
              </button>
            </div>
          </form>
          <p className={styles.hint}>{t.hint}</p>

          <div aria-live="polite">
            {state.status === 'error' && (
              <p role="alert" className={styles.error}>
                {state.message}
              </p>
            )}
            {state.status === 'done' && (
              <section aria-labelledby="draft-title" className={styles.result}>
                <h2 id="draft-title" className={styles.resultTitle}>
                  {t.draftTitle}
                </h2>
                <pre className={styles.draft}>{state.draft}</pre>
                <Button onClick={() => void copy(state.draft)}>{copied ? t.copied : t.copy}</Button>
              </section>
            )}
          </div>
        </Section>
      </main>
    </>
  );
}
