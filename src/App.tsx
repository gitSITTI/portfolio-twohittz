import { About } from "./components/About";
import { ArchDiagram } from "./components/ArchDiagram";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { WhatIBuild } from "./components/WhatIBuild";
import { content } from "./data/content";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView();
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <div className="site-shell">
        <header className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 pt-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">{content.site.domain}</p>
            <p className="font-display text-[2rem] italic leading-none md:text-[2.8rem]">
              {content.site.title}
            </p>
          </div>
          <nav className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.16em] text-[var(--ink-dim)]">
            <button type="button" className="nav-button" onClick={() => scrollToSection("top")}>
              {content.navigation.intro}
            </button>
            <button
              type="button"
              className="nav-button"
              onClick={() => scrollToSection("projects")}
            >
              {content.navigation.projects}
            </button>
            <button type="button" className="nav-button" onClick={() => scrollToSection("stack")}>
              {content.navigation.stack}
            </button>
            <button type="button" className="nav-button" onClick={() => scrollToSection("about")}>
              {content.navigation.about}
            </button>
          </nav>
        </header>

        <main id="top">
          <div className="py-14">
            <Hero content={content.hero} onViewProjects={() => scrollToSection("projects")} />
            <WhatIBuild
              eyebrow={content.build.eyebrow}
              title={content.build.title}
              columns={content.build.columns}
            />
            <ProjectsGrid
              eyebrow={content.projects.eyebrow}
              title={content.projects.title}
              emptyLinkLabel={content.projects.emptyLinkLabel}
              items={content.projects.items}
            />
            <ArchDiagram
              eyebrow={content.infrastructure.eyebrow}
              title={content.infrastructure.title}
              feederLabel={content.infrastructure.feederLabel}
              arrows={content.infrastructure.arrows}
              feeder={content.infrastructure.feeder}
              chain={content.infrastructure.chain}
            />
            <About
              eyebrow={content.about.eyebrow}
              title={content.about.title}
              photoAlt={content.about.photoAlt}
              photoInitials={content.about.photoInitials}
              photoSrc={content.about.photoSrc}
              paragraphs={content.about.paragraphs}
              links={content.about.links}
            />
          </div>
        </main>

        <Footer left={content.footer.left} right={content.footer.right} />
      </div>
    </div>
  );
}
