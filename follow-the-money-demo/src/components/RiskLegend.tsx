const risks = [
  {
    label: "Low risk",
    className: "bg-risk-low",
  },
  {
    label: "Medium risk",
    className: "bg-risk-medium",
  },
  {
    label: "High risk",
    className: "bg-risk-high",
  },
];

export function RiskLegend() {
  return (
    <div className="mb-4 flex flex-wrap gap-3">
      {risks.map((risk) => (
        <div
          key={risk.label}
          className="flex items-center gap-2 rounded-full border border-border-soft bg-surface px-4 py-2 text-sm text-text-muted">
          <span className={`h-3 w-3 rounded-full ${risk.className}`} />
          {risk.label}
        </div>
      ))}
    </div>
  );
}
