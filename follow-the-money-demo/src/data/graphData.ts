export const graphElements = [
  {
    data: {
      id: "wallet-a",
      label: "Wallet A",
      type: "wallet",
      risk: "medium",
      description:
        "Initial wallet connected to suspicious transaction activity.",
    },
  },
  {
    data: {
      id: "cluster-1",
      label: "Cluster 1",
      type: "cluster",
      risk: "high",
      description: "Grouped addresses with coherent transaction behaviour.",
    },
  },
  {
    data: {
      id: "exchange",
      label: "Known Exchange",
      type: "exchange",
      risk: "low",
      description: "Regulated exchange with known attribution.",
    },
  },
  {
    data: {
      id: "gambling",
      label: "Gambling Service",
      type: "gambling",
      risk: "medium",
      description: "Service category identified through attribution data.",
    },
  },
  {
    data: {
      id: "mixer",
      label: "Mixer",
      type: "mixer",
      risk: "high",
      description: "High-risk service used to obscure transaction flow.",
    },
  },

  {
    data: {
      source: "wallet-a",
      target: "cluster-1",
      label: "transfer",
      amount: "2.4 BTC",
    },
  },
  {
    data: {
      source: "cluster-1",
      target: "gambling",
      label: "payment",
      amount: "1.1 BTC",
    },
  },
  {
    data: {
      source: "cluster-1",
      target: "mixer",
      label: "obfuscation",
      amount: "0.8 BTC",
    },
  },
  {
    data: {
      source: "mixer",
      target: "exchange",
      label: "cash-out",
      amount: "0.6 BTC",
    },
  },
];
