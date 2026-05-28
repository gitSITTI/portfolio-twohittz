import type { HeroContent } from "../data/content";

type HeroProps = {
  content: HeroContent;
  onViewProjects: () => void;
};

export function Hero({ content, onViewProjects }: HeroProps) {
  return (
    <section className="grid gap-8 border-b border-[var(--line)] pb-14 md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.85fr)] md:gap-12">
      <div className="space-y-6">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="font-display text-5xl leading-none italic text-[var(--ink)] md:text-7xl">
          {content.headline}
        </h1>
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.22em] text-[var(--ink-dim)]">
          {content.subhead}
        </p>
        <div className="max-w-3xl space-y-4 text-[0.98rem] leading-7 text-[var(--ink-dim)]">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button className="button-shell" type="button" onClick={onViewProjects}>
            {content.primaryCta}
          </button>
          <a
            className="button-shell button-shell-secondary"
            href={content.secondaryHref}
            target="_blank"
            rel="noreferrer"
          >
            {content.secondaryCta}
          </a>
        </div>
      </div>

      <aside className="panel-shell flex h-full flex-col justify-between gap-8">
        <div className="space-y-3">
          <p className="eyebrow text-[var(--emerald)]">{content.statusLabel}</p>
          <p className="font-display text-3xl italic text-[var(--ink)]">
            {content.statusValue}
          </p>
        </div>
        <div className="space-y-4 border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--ink-dim)]">
          {content.metrics.map((metric) => (
            <div key={metric.label} className="flex items-center justify-between gap-4">
              <span className="eyebrow !tracking-[0.14em]">{metric.label}</span>
              <span
                className={`text-right text-[var(--ink)] ${
                  metric.live ? "inline-flex items-center gap-2" : ""
                }`}
              >
                {metric.live ? <span className="status-dot" /> : null}
                <span>{metric.value}</span>
              </span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
