import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { Button, Section } from '../../design-system/index';
import type { PostingSource } from '../features/application-draft/draftApi';
import { useApplicationDraft } from '../features/application-draft/useApplicationDraft';
import { CoverLetterDocument } from '../features/cover-letter/CoverLetterDocument';
import { LOCALES, profile, type Locale } from '../content';
import { ui } from '../i18n/ui';
import { detectLocale } from '../lib/paths';
import styles from './CreatePage.module.css';

export function CreatePage() {
  const locale = detectLocale(navigator.languages);
  const { create: t, nav } = ui[locale];
  const { state, generate } = useApplicationDraft();
  const [mode, setMode] = useState<PostingSource['kind']>('url');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [copied, setCopied] = useState(false);
  // The letter follows the posting's language, so it is chosen separately from the site language.
  const [letterLocale, setLetterLocale] = useState<Locale>(locale);
  // null means "untouched": the headline follows the language, the body follows the latest draft.
  const [headlineEdit, setHeadlineEdit] = useState<string | null>(null);
  const [bodyEdit, setBodyEdit] = useState<{ draft: string; body: string } | null>(null);

  const loading = state.status === 'loading';
  const needsCode = state.status === 'error' && state.code === 'unauthorized';

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setCopied(false);
    setHeadlineEdit(null);
    const source: PostingSource =
      mode === 'url' ? { kind: 'url', url: url.trim() } : { kind: 'text', text: text.trim() };
    void generate(source, accessCode || undefined);
  }

  async function copy(draft: string) {
    await navigator.clipboard.writeText(draft);
    setCopied(true);
  }

  const headline = headlineEdit ?? ui[letterLocale].create.headlineDefault;
  const bodyFor = (draft: string) => (bodyEdit?.draft === draft ? bodyEdit.body : draft);

  return (
    <>
      {/* The PDF file name defaults to the document title. */}
      <title>{state.status === 'done' ? `${profile.name} · ${headline}` : t.title}</title>
      {/* Everything except the letter preview is screen-only, so printing yields just the letter. */}
      <div className="ds-no-print">
        <header className={styles.header}>
          <Link to={`/${locale}`}>{nav.home}</Link>
        </header>
        <main className={styles.main}>
          <Section title={t.title}>
            <form className={styles.form} onSubmit={onSubmit}>
              <fieldset className={styles.modes}>
                <legend className={styles.label}>{t.sourceLabel}</legend>
                {(['url', 'text'] as const).map((value) => (
                  <label key={value} className={styles.mode}>
                    <input
                      type="radio"
                      name="source"
                      value={value}
                      checked={mode === value}
                      onChange={() => setMode(value)}
                    />
                    <span>{value === 'url' ? t.sourceUrl : t.sourceText}</span>
                  </label>
                ))}
              </fieldset>
              {mode === 'url' ? (
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
              ) : (
                <label className={styles.field}>
                  <span className={styles.label}>{t.textLabel}</span>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    required
                    minLength={50}
                    rows={10}
                    value={text}
                    placeholder={t.textPlaceholder}
                    onChange={(event) => setText(event.target.value)}
                  />
                </label>
              )}
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
                      onChange={(event) => setHeadlineEdit(event.target.value)}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>{t.bodyLabel}</span>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      rows={16}
                      value={bodyFor(state.draft)}
                      onChange={(event) =>
                        setBodyEdit({ draft: state.draft, body: event.target.value })
                      }
                    />
                  </label>
                  <div className={styles.actions}>
                    <Button onClick={() => void copy(bodyFor(state.draft))}>
                      {copied ? t.copied : t.copy}
                    </Button>
                    <Button variant="primary" onClick={() => window.print()}>
                      {t.exportPdf}
                    </Button>
                  </div>
                  <p className={styles.hint}>{t.exportHint}</p>
                </section>
              )}
            </div>
          </Section>
        </main>
      </div>
      {state.status === 'done' && (
        <CoverLetterDocument
          headline={headline}
          body={bodyFor(state.draft)}
          locale={letterLocale}
        />
      )}
    </>
  );
}
