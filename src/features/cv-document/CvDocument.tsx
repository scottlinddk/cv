import { profile } from '../../content';
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
 * Layout is deliberately a single flowing column so it paginates cleanly at any length.
 */
export function CvDocument() {
  const { locale, t } = useLocale();

  return (
    <div className={styles.stage}>
      <article className={styles.paper}>
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
            <ContactList />
          </div>
        </header>

        <Section title={t.sections.summary}>
          <p className={styles.summary}>{profile.summary[locale]}</p>
        </Section>

        <Section title={t.sections.experience}>
          <ExperienceList />
        </Section>

        <div className={styles.columns}>
          <Section title={t.sections.skills}>
            <SkillGroups />
          </Section>
          <div>
            <Section title={t.sections.education}>
              <EducationList />
            </Section>
            <Section title={t.sections.languages}>
              <LanguageList />
            </Section>
          </div>
        </div>

        <Section title={t.sections.projects}>
          <ProjectList />
        </Section>
      </article>
    </div>
  );
}
