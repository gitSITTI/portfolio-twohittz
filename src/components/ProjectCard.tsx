import type { Project } from "../data/content";

type ProjectCardProps = {
  project: Project;
  emptyLinkLabel: string;
};

const toneClassMap: Record<Project["tone"], string> = {
  active: "status-badge status-badge-active",
  development: "status-badge status-badge-development",
  planning: "status-badge status-badge-planning",
  shipped: "status-badge status-badge-shipped",
};

export function ProjectCard({ project, emptyLinkLabel }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-display text-[1.7rem] italic leading-tight text-[var(--ink)]">
            {project.name}
          </h3>
          <p className="text-sm leading-6 text-[var(--ink-dim)]">
            {project.description}
          </p>
        </div>
        <span className={toneClassMap[project.tone]}>
          <span className="status-dot" />
          <span>{project.status}</span>
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span key={tag} className="tag-shell">
            {tag}
          </span>
        ))}
      </div>

      {project.href ? (
        <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
          {project.linkLabel}
        </a>
      ) : (
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          {emptyLinkLabel}
        </p>
      )}
    </article>
  );
}
