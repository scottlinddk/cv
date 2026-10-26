import { Link } from 'react-router';
import { Section } from '../components/Section/Section';
import { LanguageSwitch } from '../components/LanguageSwitch/LanguageSwitch';
import { EducationList } from '../features/education/EducationList';
import { ExperienceList } from '../features/experience/ExperienceList';
import { Hero } from '../features/hero/Hero';
import { LanguageList } from '../features/languages/LanguageList';
import { ProjectList } from '../features/projects/ProjectList';
import { SkillGroups } from '../features/skills/SkillGroups';
import { profile } from '../content';
import { useLocale } from '../hooks/useLocale';
import styles from './HomePage.module.css';

export function HomePage() {
  const { locale, t } = useLocale();

  return (
    <>
      <title>{`${profile.name} · ${profile.title[locale]}`}</title>
      <a href="#content" className={`${styles.skip} no-print`}>
        {t.skipToContent}
      </a>
      <header className={`${styles.header} no-print`}>
        <Link to={`/${locale}/cv`}>{t.nav.cv}</Link>
        <LanguageSwitch />
      </header>
      <main id="content" className={styles.main}>
        <Hero />
        <Section title={t.sections.experience}>
          <ExperienceList />
        </Section>
        <Section title={t.sections.skills}>
          <SkillGroups />
        </Section>
        <Section title={t.sections.projects}>
          <ProjectList />
        </Section>
        <Section title={t.sections.education}>
          <EducationList />
        </Section>
        <Section title={t.sections.languages}>
          <LanguageList />
        </Section>
      </main>
    </>
  );
}
