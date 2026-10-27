import { profile } from '../content';
import { CvToolbar } from '../features/cv-toolbar/CvToolbar';
import { CvDocument } from '../features/cv-document/CvDocument';
import { useLocale } from '../hooks/useLocale';

export function CvPage() {
  const { locale } = useLocale();

  return (
    <>
      {/* Becomes the PDF's document title. */}
      <title>{`${profile.name} · ${profile.title[locale]} · CV`}</title>
      <CvToolbar />
      <main>
        <CvDocument />
      </main>
    </>
  );
}
