import { Link } from 'react-router';
import { ui } from '../i18n/ui';
import { detectLocale } from '../lib/paths';

export function NotFoundPage() {
  const locale = detectLocale(navigator.languages);
  const { notFound } = ui[locale];

  return (
    <main style={{ maxWidth: '40rem', margin: '4rem auto', padding: '0 1rem' }}>
      <h1>{notFound.title}</h1>
      <p>{notFound.body}</p>
      <Link to={`/${locale}`}>{notFound.link}</Link>
    </main>
  );
}
