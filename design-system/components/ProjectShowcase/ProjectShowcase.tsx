import type { ElementType, ReactNode } from 'react';
import { TagList } from '../TagList/TagList';
import { cx } from '../../utils';
import './ProjectShowcase.css';

export interface ProjectShowcaseLink {
  /** Visible link text, e.g. "Source code". Always provide it. */
  label: string;
  href: string;
}

export interface ProjectShowcaseItem {
  id: string;
  name: string;
  description: string;
  /** Short mono caption above the name, e.g. "2025 · Side project". */
  eyebrow?: string;
  tech?: readonly string[];
  links?: readonly ProjectShowcaseLink[];
  /** Makes the name a link to the project's own page. */
  detailHref?: string;
  /** Optional screenshot shown above the text. Decorative, so alt may be empty. */
  image?: { src: string; alt: string };
}

export interface ProjectShowcaseProps {
  items: readonly ProjectShowcaseItem[];
  /** Swap the anchor used for `detailHref` for a router link component (it receives `to`). */
  linkAs?: ElementType;
  className?: string;
}

/**
 * Showcase grid for personal projects: outlined cards with an optional screenshot, serif name,
 * description, technologies and text links. Two columns on desktop, one on mobile. Cards never
 * split across printed pages.
 */
export function ProjectShowcase({ items, linkAs, className }: ProjectShowcaseProps) {
  const renderDetailLink = (href: string, children: ReactNode, className?: string) => {
    if (linkAs) {
      const Link = linkAs;
      return (
        <Link className={className} to={href}>
          {children}
        </Link>
      );
    }
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  };

  return (
    <ul className={cx('ds-showcase', className)}>
      {items.map((project) => (
        <li key={project.id} className="ds-showcase__card">
          {project.image && (
            <img
              className="ds-showcase__image"
              src={project.image.src}
              alt={project.image.alt}
              width={640}
              height={360}
              loading="lazy"
            />
          )}
          {project.eyebrow && <p className="ds-showcase__eyebrow">{project.eyebrow}</p>}
          <h3 className="ds-showcase__name">
            {project.detailHref
              ? renderDetailLink(project.detailHref, project.name, 'ds-showcase__name-link')
              : project.name}
          </h3>
          <p className="ds-showcase__description">{project.description}</p>
          {project.tech && project.tech.length > 0 && <TagList items={project.tech} />}
          {project.links && project.links.length > 0 && (
            <ul className="ds-showcase__links">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
