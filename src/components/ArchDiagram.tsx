import type { InfrastructureNode } from "../data/content";

type ArchDiagramProps = {
  eyebrow: string;
  title: string;
  feederLabel: string;
  arrows: {
    down: string;
    right: string;
  };
  feeder: InfrastructureNode;
  chain: InfrastructureNode[];
};

export function ArchDiagram({
  eyebrow,
  title,
  feederLabel,
  arrows,
  feeder,
  chain,
}: ArchDiagramProps) {
  return (
    <section id="stack" className="space-y-8 border-b border-[var(--line)] py-14">
      <div className="space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display text-3xl italic md:text-5xl">{title}</h2>
      </div>

      <div className="panel-shell space-y-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,18rem)_auto_1fr] xl:items-center">
          <div className="space-y-4">
            <div className="infra-node infra-node-feature">
              <p className="eyebrow text-[var(--emerald)]">{feeder.title}</p>
              <p className="text-sm leading-7 text-[var(--ink-dim)]">
                {feeder.description}
              </p>
            </div>
            <p className="max-w-xs text-xs uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              {feederLabel}
            </p>
          </div>

          <div className="hidden xl:flex xl:h-full xl:flex-col xl:items-center xl:justify-center">
            <span className="text-2xl text-[var(--emerald)]">{arrows.right}</span>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-4">
            {chain.map((node, index) => (
              <div key={node.title} className="contents">
                <div className="infra-node">
                  <p className="eyebrow">{node.title}</p>
                  <p className="text-sm leading-7 text-[var(--ink-dim)]">
                    {node.description}
                  </p>
                </div>
                {index < chain.length - 1 ? (
                  <>
                    <div className="flex justify-center text-2xl text-[var(--amber)] lg:hidden">
                      {arrows.down}
                    </div>
                    <div className="hidden items-center justify-center lg:flex">
                      <span className="text-2xl text-[var(--amber)]">{arrows.right}</span>
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
