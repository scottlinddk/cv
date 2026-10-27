import { Portrait, ProfileHeader, Section, Sheet } from '../../../design-system/index';
import { profile, spokenLanguages } from '../../content';
import { ProfileContacts } from '../contact/ProfileContacts';
import { EducationList } from '../education/EducationList';
import { ExperienceList } from '../experience/ExperienceList';
import { LanguageList } from '../languages/LanguageList';
import { SkillGroups } from '../skills/SkillGroups';
import { assetUrl } from '../../lib/assets';
import { useLocale } from '../../hooks/useLocale';

/**
 * The A4 document. On screen it renders as a sheet of paper; when printed (or exported to PDF by
 * scripts/build-pdf.ts) the @page rules in the design system's print.css take over.
 *
 * Reading order for ATS parsers: header (name, role, summary, contact), then the sidebar, then the
 * main column. The experience therefore comes after education and skills in the text layer.
 */
export function CvDocument() {
  const { locale, t } = useLocale();

  return (
    <Sheet
      header={
        <ProfileHeader
          name={profile.name}
          role={profile.title[locale]}
          summary={profile.summary[locale]}
          portrait={<Portrait size="sheet" src={assetUrl(profile.photo)} alt={profile.name} />}
          aside={
            <Section title={t.sections.contact}>
              <ProfileContacts layout="stack" />
            </Section>
          }
        />
      }
      sidebar={
        <>
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
        </>
      }
    >
      <Section title={t.sections.experience}>
        <ExperienceList />
      </Section>
    </Sheet>
  );
}
