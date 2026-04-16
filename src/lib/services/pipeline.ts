export type PipelineFormValues = {
  id?: string;
  name: string;
  company?: string;
  status?: string;
  estimatedValue?: string;
  probability?: string;
  nextStep?: string;
  followUpDate?: string;
  source?: string;
};

const MOCK: PipelineFormValues[] = [
  {
    id: "pipe-1",
    name: "West Creek Condo Lobby Refresh",
    company: "West Creek Developments",
    status: "quoting",
    estimatedValue: "$118,000",
    probability: "65%",
    nextStep: "Send revised tile and LVT alternates with phasing plan.",
    followUpDate: "2026-04-18",
    source: "Builder referral"
  },
  {
    id: "pipe-2",
    name: "Sherwood Retail Expansion",
    company: "Northline Retail Group",
    status: "follow-up",
    estimatedValue: "$74,000",
    probability: "45%",
    nextStep: "Confirm night-install access and final scope split by zone.",
    followUpDate: "2026-04-19",
    source: "Existing client"
  },
  {
    id: "pipe-3",
    name: "Airport Office Fit-Out",
    company: "AeroEdge Commercial",
    status: "negotiation",
    estimatedValue: "$152,000",
    probability: "72%",
    nextStep: "Lock moisture mitigation allowance and phased mobilization dates.",
    followUpDate: "2026-04-17",
    source: "Architect introduction"
  }
];

export async function getPipelineList() {
  return MOCK;
}

export async function getPipelineById(id: string) {
  return MOCK.find((entry) => entry.id === id) ?? null;
}

export const getpipelineById = getPipelineById;
