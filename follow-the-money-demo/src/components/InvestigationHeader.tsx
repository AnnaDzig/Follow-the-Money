export function InvestigationHeader() {
  return (
    <header className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Crypto investigation graph
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-main md:text-5xl">
          Follow the Money
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-text-muted">
          A small React and TypeScript demo that visualizes how funds move
          between wallets, clusters, services, mixers, and exchanges.
        </p>
      </div>

      <div className="rounded-2xl border border-border-soft bg-surface px-5 py-4">
        <p className="text-sm text-text-muted">Case status</p>
        <p className="mt-1 font-semibold text-risk-medium">Under review</p>
      </div>
    </header>
  );
}
