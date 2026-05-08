import type { Transaction } from "../types/graph";

export const graphElements = [
  {
    data: {
      id: "wallet-a",
      label: "Wallet A",
      type: "wallet",
      risk: "medium",
      balance: "2.4 BTC",
      confidence: 78,
      description:
        "Initial wallet found during investigation. Connected to multiple outgoing transfers.",
    },
  },
  {
    data: {
      id: "cluster-alpha",
      label: "Cluster Alpha",
      type: "cluster",
      risk: "high",
      balance: "5.8 BTC",
      confidence: 91,
      description:
        "Grouped addresses with coherent behaviour based on shared transaction patterns.",
    },
  },
  {
    data: {
      id: "gambling-service",
      label: "Gambling Service",
      type: "gambling",
      risk: "medium",
      balance: "14.2 BTC",
      confidence: 84,
      description:
        "Attributed service category. Funds appear to move through a known gambling-related entity.",
    },
  },
  {
    data: {
      id: "mixer-node",
      label: "Mixer",
      type: "mixer",
      risk: "high",
      balance: "31.7 BTC",
      confidence: 96,
      description:
        "High-risk service used to obscure transaction history and break traceability.",
    },
  },
  {
    data: {
      id: "exchange-node",
      label: "Exchange",
      type: "exchange",
      risk: "low",
      balance: "120.6 BTC",
      confidence: 89,
      description:
        "Known exchange entity. Potential cash-out destination after obfuscation path.",
    },
  },
  {
    data: {
      id: "merchant-node",
      label: "Merchant",
      type: "merchant",
      risk: "low",
      balance: "0.9 BTC",
      confidence: 73,
      description:
        "Low-risk merchant node connected to one branch of the transaction path.",
    },
  },

  {
    data: {
      id: "tx-1",
      source: "wallet-a",
      target: "cluster-alpha",
      amount: "2.4 BTC",
      status: "flagged",
    },
  },
  {
    data: {
      id: "tx-2",
      source: "cluster-alpha",
      target: "gambling-service",
      amount: "1.1 BTC",
      status: "review",
    },
  },
  {
    data: {
      id: "tx-3",
      source: "cluster-alpha",
      target: "mixer-node",
      amount: "0.8 BTC",
      status: "flagged",
    },
  },
  {
    data: {
      id: "tx-4",
      source: "mixer-node",
      target: "exchange-node",
      amount: "0.6 BTC",
      status: "flagged",
    },
  },
  {
    data: {
      id: "tx-5",
      source: "cluster-alpha",
      target: "merchant-node",
      amount: "0.3 BTC",
      status: "confirmed",
    },
  },
];

export const transactions: Transaction[] = [
  {
    id: "TX-001",
    from: "Wallet A",
    to: "Cluster Alpha",
    amount: "2.4",
    asset: "BTC",
    status: "flagged",
  },
  {
    id: "TX-002",
    from: "Cluster Alpha",
    to: "Gambling Service",
    amount: "1.1",
    asset: "BTC",
    status: "review",
  },
  {
    id: "TX-003",
    from: "Cluster Alpha",
    to: "Mixer",
    amount: "0.8",
    asset: "BTC",
    status: "flagged",
  },
  {
    id: "TX-004",
    from: "Mixer",
    to: "Exchange",
    amount: "0.6",
    asset: "BTC",
    status: "flagged",
  },
];
