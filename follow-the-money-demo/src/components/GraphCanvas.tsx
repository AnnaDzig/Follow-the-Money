import CytoscapeComponent from "react-cytoscapejs";
import type { Core, EventObject } from "cytoscape";

import { graphElements } from "../data/investigationGraph";
import type { InvestigationNode } from "../types/graph";

type GraphCanvasProps = {
  onSelectNode: (node: InvestigationNode) => void;
};

export function GraphCanvas({ onSelectNode }: GraphCanvasProps) {
  const handleReady = (cy: Core) => {
    cy.on("tap", "node", (event: EventObject) => {
      const nodeData = event.target.data() as InvestigationNode;
      onSelectNode(nodeData);
    });

    cy.fit();
  };

  return (
    <div className="h-[620px] overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-glow">
      <CytoscapeComponent
        elements={graphElements}
        cy={handleReady}
        layout={{
          name: "cose",
          animate: true,
          padding: 60,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        stylesheet={[
          {
            selector: "node",
            style: {
              label: "data(label)",
              width: 64,
              height: 64,
              color: "#e5e7eb",
              "font-size": 12,
              "font-weight": 600,
              "text-valign": "bottom",
              "text-margin-y": 10,
              "background-color": "#64748b",
              "border-width": 2,
              "border-color": "#1e293b",
            },
          },
          {
            selector: 'node[risk = "low"]',
            style: {
              "background-color": "#22c55e",
            },
          },
          {
            selector: 'node[risk = "medium"]',
            style: {
              "background-color": "#f59e0b",
            },
          },
          {
            selector: 'node[risk = "high"]',
            style: {
              "background-color": "#ef4444",
            },
          },
          {
            selector: "edge",
            style: {
              label: "data(amount)",
              width: 3,
              "line-color": "#38bdf8",
              "target-arrow-color": "#38bdf8",
              "target-arrow-shape": "triangle",
              "curve-style": "bezier",
              color: "#cbd5e1",
              "font-size": 11,
              "text-background-color": "#020617",
              "text-background-opacity": 1,
            },
          },
          {
            selector: 'edge[status = "flagged"]',
            style: {
              "line-color": "#ef4444",
              "target-arrow-color": "#ef4444",
            },
          },
          {
            selector: ":selected",
            style: {
              "border-width": 5,
              "border-color": "#ffffff",
            },
          },
        ]}
      />
    </div>
  );
}
