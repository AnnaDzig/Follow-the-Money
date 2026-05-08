import type { InvestigationNode } from "../types/graph";

type EntityDetailsPanelProps = {
  node: InvestigationNode | null;
};

export function EntityDetailsPanel({ node }: EntityDetailsPanelProps) {
  if (!node) {
    return (
      <aside className="rounded-3xl border border-border-soft bg-surface p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Entity inspector
        </p>
        <h2 className="mt-3 text-2xl font-bold text-text-main">
          Select a node
        </h2>
        <p className="mt-3 text-sm leading-6 text-text-muted">
          Click an entity in the graph to inspect its risk level, attribution,
          confidence score, and investigation context.
        </p>
      </aside>
    );
  }

  const riskClass = {
    low: "text-risk-low",
    medium: "text-risk-medium",
    high: "text-risk-high",
  }[node.risk];

  return (
    <aside className="rounded-3xl border border-border-soft bg-surface p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Entity inspector
      </p>

      <h2 className="mt-3 text-2xl font-bold text-text-main">{node.label}</h2>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-text-muted">Type</p>
          <p className="mt-1 capitalize text-text-main">{node.type}</p>
        </div>

        <div>
          <p className="text-sm text-text-muted">Risk level</p>
          <p className={`mt-1 capitalize font-semibold ${riskClass}`}>
            {node.risk}
          </p>
        </div>

        <div>
          <p className="text-sm text-text-muted">Balance</p>
          <p className="mt-1 text-text-main">{node.balance}</p>
        </div>

        <div>
          <p className="text-sm text-text-muted">Confidence</p>
          <div className="mt-2 h-2 rounded-full bg-slate-800">
            <div
              className="h-2 rounded-full bg-accent"
              style={{ width: `${node.confidence}%` }}
            />
          </div>
          <p className="mt-1 text-sm text-text-muted">{node.confidence}%</p>
        </div>

        <div>
          <p className="text-sm text-text-muted">Context</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {node.description}
          </p>
        </div>
      </div>
    </aside>
  );
}
