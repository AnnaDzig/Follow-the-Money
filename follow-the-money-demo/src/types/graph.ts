export type RiskLevel = "low" | "medium" | "high";

export type EntityType =
  | "wallet"
  | "cluster"
  | "exchange"
  | "gambling"
  | "mixer"
  | "merchant";

export type InvestigationNode = {
  id: string;
  label: string;
  type: EntityType;
  risk: RiskLevel;
  balance: string;
  confidence: number;
  description: string;
};

export type Transaction = {
  id: string;
  from: string;
  to: string;
  amount: string;
  asset: string;
  status: "confirmed" | "flagged" | "review";
};
