import { Link, useParams } from 'react-router';
import { Button, Section, SplitLayout, TagList } from '../../design-system/index';
import { AppLanguageSwitch } from '../features/language-switch/AppLanguageSwitch';
import { SiteFooter } from '../features/site-footer/SiteFooter';
import { AppThemeSwitch } from '../features/theme-switch/AppThemeSwitch';
import { profile, projects } from '../content';
import { useLocale } from '../hooks/useLocale';
import { assetUrl } from '../lib/assets';
import { NotFoundPage } from './NotFoundPage';
import styles from './HomePage.module.css';
import projectStyles from './ProjectPage.module.css';

export function ProjectPage() {
  const { id } = useParams();
  const { locale, t } = useLocale();
  const project = projects.find((candidate) => candidate.id === id);

  if (!project) return <NotFoundPage />;

  const highlights = project.highlights?.[locale] ?? [];
  const liveLink = project.links?.find((link) => link.href === project.href);

  return (
    <>
      <title>{`${project.name} · ${profile.name}`}</title>
      <a href="#content" className={`${styles.skip} ds-no-print`}>
        {t.skipToContent}
      </a>
      <header className={`${styles.header} ds-no-print`}>
        <Link to={`/${locale}`}>{t.nav.home}</Link>
        <AppLanguageSwitch />
        <AppThemeSwitch />
      </header>
      <main id="content">
        <SplitLayout
          aside={
            <div className={projectStyles.aside}>
              <Link to={`/${locale}`}>{`← ${t.actions.allProjects}`}</Link>
              {project.eyebrow && <p className={styles.caption}>{project.eyebrow[locale]}</p>}
            </div>
          }
        >
          <article className={projectStyles.article}>
            <h1 className={projectStyles.title}>{project.name}</h1>
            <p className={projectStyles.lead}>{project.description[locale]}</p>
            <div className={styles.actions}>
              {project.href && (
                <Button href={project.href} variant="primary">
                  {liveLink ? liveLink.label[locale] : t.actions.visitSite}
                </Button>
              )}
              {project.links
                ?.filter((link) => link !== liveLink)
                .map((link) => (
                  <Button key={link.href} href={link.href}>
                    {link.label[locale]}
                  </Button>
                ))}
            </div>
            {project.image && (
              <img
                className={projectStyles.image}
                src={assetUrl(project.image)}
                alt={`${project.name}`}
                width={1280}
                height={720}
              />
            )}
            {highlights.length > 0 && (
              <Section title={t.projectPage.highlights}>
                <ul className={projectStyles.highlights}>
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </Section>
            )}
            {project.tech.length > 0 && (
              <Section title={t.projectPage.technologies}>
                <TagList items={project.tech} />
              </Section>
            )}
          </article>
          <SiteFooter />
        </SplitLayout>
      </main>
    </>
  );
}
