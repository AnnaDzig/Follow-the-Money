const stats = [
  {
    label: "Entities",
    value: "6",
  },
  {
    label: "Transactions",
    value: "5",
  },
  {
    label: "Flagged paths",
    value: "3",
  },
  {
    label: "Highest risk",
    value: "Mixer",
  },
];

export function InvestigationStats() {
  return (
    <section className="mb-6 grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-2xl border border-border-soft bg-surface p-5">
          <p className="text-sm text-text-muted">{stat.label}</p>
          <p className="mt-2 text-2xl font-bold text-text-main">{stat.value}</p>
        </article>
      ))}
    </section>
  );
}
