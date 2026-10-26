import { profile } from '../content';
import { Toolbar } from '../components/Toolbar/Toolbar';
import { CvDocument } from '../features/cv-document/CvDocument';
import { useLocale } from '../hooks/useLocale';

export function CvPage() {
  const { locale } = useLocale();

  return (
    <>
      {/* Becomes the PDF's document title. */}
      <title>{`${profile.name} · ${profile.title[locale]} · CV`}</title>
      <Toolbar />
      <main>
        <CvDocument />
      </main>
    </>
  );
}
