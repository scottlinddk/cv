import { Link } from 'react-router';
import { Button, Portrait, ProfileHeader, Section, SplitLayout } from '../../design-system/index';
import { ProfileContacts } from '../features/contact/ProfileContacts';
import { EducationList } from '../features/education/EducationList';
import { ExperienceList } from '../features/experience/ExperienceList';
import { AppLanguageSwitch } from '../features/language-switch/AppLanguageSwitch';
import { LanguageList } from '../features/languages/LanguageList';
import { ProjectList } from '../features/projects/ProjectList';
import { SiteFooter } from '../features/site-footer/SiteFooter';
import { SkillGroups } from '../features/skills/SkillGroups';
import { profile, projects, spokenLanguages } from '../content';
import { useLocale } from '../hooks/useLocale';
import { assetUrl } from '../lib/assets';
import styles from './HomePage.module.css';

export function HomePage() {
  const { locale, t } = useLocale();
  const pdfHref = `${import.meta.env.BASE_URL}cv.${locale}.pdf`;

  return (
    <>
      <title>{`${profile.name} · ${profile.title[locale]}`}</title>
      <a href="#content" className={`${styles.skip} ds-no-print`}>
        {t.skipToContent}
      </a>
      <header className={`${styles.header} ds-no-print`}>
        <Link to={`/${locale}/cv`}>{t.nav.cv}</Link>
        <AppLanguageSwitch />
      </header>
      <main id="content">
        <SplitLayout
          aside={
            <>
              <Portrait src={assetUrl(profile.photo)} alt={profile.name}>
                <strong>{profile.name}</strong>
                <br />
                <span className={styles.caption}>{profile.title[locale]}</span>
              </Portrait>
              <ProfileContacts layout="stack" />
            </>
          }
        >
          <div className={styles.intro}>
            <ProfileHeader
              name={profile.name}
              role={profile.title[locale]}
              summary={profile.summary[locale]}
            />
            <div className={`${styles.actions} ds-no-print`}>
              <Button as={Link} variant="primary" href={`/${locale}/cv`}>
                {t.actions.viewCv}
              </Button>
              <Button href={pdfHref} download>
                {t.actions.downloadPdf}
              </Button>
            </div>
          </div>
          <Section title={t.sections.experience}>
            <ExperienceList />
          </Section>
          <Section title={t.sections.skills}>
            <SkillGroups variant="cards" />
          </Section>
          {projects.length > 0 && (
            <Section title={t.sections.projects}>
              <ProjectList />
            </Section>
          )}
          <Section title={t.sections.education}>
            <EducationList />
          </Section>
          {spokenLanguages.length > 0 && (
            <Section title={t.sections.languages}>
              <LanguageList />
            </Section>
          )}
          <SiteFooter />
        </SplitLayout>
      </main>
    </>
  );
}
