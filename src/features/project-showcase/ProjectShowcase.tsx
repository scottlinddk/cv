import { Link } from 'react-router';
import { ProjectShowcase as DsProjectShowcase } from '../../../design-system/index';
import { projects } from '../../content';
import { useLocale } from '../../hooks/useLocale';
import { assetUrl } from '../../lib/assets';

export function ProjectShowcase() {
  const { locale } = useLocale();

  return (
    <DsProjectShowcase
      linkAs={Link}
      items={projects.map((project) => ({
        id: project.id,
        name: project.name,
        description: project.description[locale],
        eyebrow: project.eyebrow?.[locale],
        tech: project.tech,
        detailHref: `/${locale}/project/${project.id}`,
        links: project.links?.map((link) => ({ label: link.label[locale], href: link.href })),
        image: project.image ? { src: assetUrl(project.image), alt: `${project.name}` } : undefined,
      }))}
    />
  );
}
