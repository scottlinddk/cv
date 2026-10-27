import { ProjectList as DsProjectList } from '../../../design-system/index';
import { projects } from '../../content';
import { useLocale } from '../../hooks/useLocale';

export function ProjectList() {
  const { locale } = useLocale();

  return (
    <DsProjectList
      items={projects.map((project) => ({
        id: project.id,
        name: project.name,
        description: project.description[locale],
        tech: project.tech,
        href: project.href,
      }))}
    />
  );
}
