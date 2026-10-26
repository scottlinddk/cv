import { profile, projects, spokenLanguages } from '../../content';
import { ContactList } from '../../components/ContactList/ContactList';
import { Section } from '../../components/Section/Section';
import { EducationList } from '../education/EducationList';
import { ExperienceList } from '../experience/ExperienceList';
import { LanguageList } from '../languages/LanguageList';
import { ProjectList } from '../projects/ProjectList';
import { SkillGroups } from '../skills/SkillGroups';
import { assetUrl } from '../../lib/assets';
import { useLocale } from '../../hooks/useLocale';
import styles from './CvDocument.module.css';

/**
 * The A4 document. On screen it renders as a sheet of paper; when printed (or exported to PDF by
 * scripts/build-pdf.ts) the @page rules in styles/print.css take over and the sheet chrome vanishes.
 *
 * Page 1 carries the warm header panel. Below it, a sidebar and a main column share a grid; the
 * main column owns the divider line so it keeps running when the CV continues onto page 2.
 */
export function CvDocument() {
  const { locale, t } = useLocale();

  return (
    <div className={styles.stage}>
      <article className={`${styles.paper} theme-paper`}>
        <header className={styles.header}>
          <img
            className={styles.photo}
            src={assetUrl(profile.photo)}
            alt={profile.name}
            width={110}
            height={110}
          />
          <div className={styles.identity}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.title}>{profile.title[locale]}</p>
            <p className={styles.summary}>{profile.summary[locale]}</p>
          </div>
          <div className={styles.contact}>
            <h2 className={styles.contactTitle}>{t.sections.contact}</h2>
            <ContactList layout="stack" />
          </div>
        </header>

        <div className={styles.body}>
          <aside className={styles.sidebar}>
            <Section title={t.sections.education}>
              <EducationList />
            </Section>
            <Section title={t.sections.skills}>
              <SkillGroups />
            </Section>
            {spokenLanguages.length > 0 && (
              <Section title={t.sections.languages}>
                <LanguageList />
              </Section>
            )}
          </aside>

          <div className={styles.main}>
            <Section title={t.sections.experience}>
              <ExperienceList />
            </Section>
            {projects.length > 0 && (
              <Section title={t.sections.projects}>
                <ProjectList />
              </Section>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
