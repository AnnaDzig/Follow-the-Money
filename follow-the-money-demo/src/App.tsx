import { useState } from "react";

import { EntityDetailsPanel } from "./components/EntityDetailsPanel";
import { GraphCanvas } from "./components/GraphCanvas";
import { InvestigationHeader } from "./components/InvestigationHeader";
import { InvestigationStats } from "./components/InvestigationStats";
import { RiskLegend } from "./components/RiskLegend";
import { TransactionTable } from "./components/TransactionTable";
import type { InvestigationNode } from "./types/graph";

function App() {
  const [selectedNode, setSelectedNode] = useState<InvestigationNode | null>(
    null,
  );

  return (
    <main className="min-h-screen bg-background px-4 py-8 font-sans text-text-main md:px-8">
      <div className="mx-auto max-w-7xl">
        <InvestigationHeader />
        <InvestigationStats />

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section>
            <RiskLegend />
            <GraphCanvas onSelectNode={setSelectedNode} />
          </section>

          <EntityDetailsPanel node={selectedNode} />
        </div>

        <TransactionTable />
      </div>
    </main>
  );
}

export default App;
