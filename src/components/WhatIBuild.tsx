import type { BuildColumn } from "../data/content";

type WhatIBuildProps = {
  eyebrow: string;
  title: string;
  columns: BuildColumn[];
};

export function WhatIBuild({ eyebrow, title, columns }: WhatIBuildProps) {
  return (
    <section className="space-y-8 border-b border-[var(--line)] py-14">
      <div className="space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display text-3xl italic md:text-5xl">{title}</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {columns.map((column, index) => (
          <article key={column.title} className="panel-shell space-y-5">
            <div className="flex items-start justify-between gap-5">
              <div className="space-y-2">
                <p className="eyebrow">{column.eyebrow}</p>
                <h3 className="font-display text-2xl italic text-[var(--ink)]">
                  {column.title}
                </h3>
              </div>
              {index === 0 ? (
                <div
                  aria-hidden="true"
                  className="dot-grid text-[var(--emerald)]"
                >
                  {Array.from({ length: 9 }).map((_, dotIndex) => (
                    <span key={dotIndex} />
                  ))}
                </div>
              ) : (
                <span
                  aria-hidden="true"
                  className={`mt-1 h-2.5 w-2.5 border border-current ${
                    column.tone === "amber"
                      ? "text-[var(--amber)]"
                      : "text-[var(--ink)]"
                  }`}
                />
              )}
            </div>
            <p className="text-sm leading-7 text-[var(--ink-dim)]">{column.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
