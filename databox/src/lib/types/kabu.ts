export type Share = {
  Info: ShareInfo;
  Evaluation: MyEvaluation;
  Documents: Document[];
  Links: ShareLink[];
  Content: ShareContent;
  BusinessModelCanvas: BusinessModelCanvas;
  Resources: Resource;
  Management: Management;
  Vrio: Vrio;
  Swot: Swot;
};

export type ShareInfo = {
  Id: string;
  Code: string;
  Name: string;
  EnglishName: string;
  Sector33Code: string;
  Sector33Name: string;
  Sector17Code: string;
  Sector17Name: string;
  MarketCode: string;
  MarketName: string;
};

export type PriceRelation = {
  Id: string;
  ShareId: string;
  StockCapitalization: number;
  StockPriceDate: string;
  PER: number;
  PBR: number;
};

export type MyEvaluation = {
  Id: string;
  ShareId: string;
  UpdateDate: string;
  BusinessOverview: string;
  InterestScore: number;
  ProfitabilityScore: number;
  Tags: string[];
};

export type ShareLink = {
  Id: string;
  ShareId: string;
  Name: string;
  Link: string;
};

export type Document = {
  Id: string;
  ShareId: string;
  Document: string;
};

export type ShareContent = {
  Id: string;
  ShareId: string;
  Business: string;
  MyPoint: string;
  MyCurrentJudgment: string;
};

export type BusinessModelCanvas = {
  Id: string;
  ShareId: string;
  GivenValue: string;
  RelatedCompany: string;
  ImportantActivity: string;
  RelationWithCustomer: string;
  Customer: string;
  Resource: string;
  Channel: string;
  CostStructure: string;
  RevenueStream: string;
};

export type Resource = {
  Id: string;
  ShareId: string;
  Workers: string;
  Cash: string;
  OtherResources: string;
};

export type Management = {
  Id: string;
  ShareId: string;
  CEO: string;
  Philosophy: string;
};

export type VRIO = {
  Id: string;
  ShareId: string;
  Value: string;
  Rare: string;
  Inimitability: string;
  Organization: string;
};

export type SWOT = {
  Id: string;
  ShareId: string;
  Strength: string;
  Weakness: string;
  Opportunity: string;
  Threat: string;
};
