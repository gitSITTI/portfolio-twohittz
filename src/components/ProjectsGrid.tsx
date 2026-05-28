import type { Project } from "../data/content";
import { ProjectCard } from "./ProjectCard";

type ProjectsGridProps = {
  eyebrow: string;
  title: string;
  emptyLinkLabel: string;
  items: Project[];
};

export function ProjectsGrid({
  eyebrow,
  title,
  emptyLinkLabel,
  items,
}: ProjectsGridProps) {
  return (
    <section id="projects" className="space-y-8 border-b border-[var(--line)] py-14">
      <div className="space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display text-3xl italic md:text-5xl">{title}</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {items.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            emptyLinkLabel={emptyLinkLabel}
          />
        ))}
      </div>
    </section>
  );
}
