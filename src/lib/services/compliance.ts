export type ComplianceRecord = {
  id: string;
  recordNumber: string;
  category: string;
  authority?: string;
  projectName?: string;
  status?: string;
  dueDate?: string;
  completedDate?: string;
  notes?: string;
};

const MOCK_COMPLIANCE: ComplianceRecord[] = [
  {
    id: "1",
    recordNumber: "CMP-001",
    category: "Certificate of insurance",
    authority: "Broker / Builder compliance",
    projectName: "Riverfront Tower Lobby",
    status: "pending",
    dueDate: "2026-04-17",
    notes: "Attach updated COI before the elevator access confirmation is sent."
  },
  {
    id: "2",
    recordNumber: "CMP-002",
    category: "Builder site readiness sign-off",
    authority: "Aspen Ridge Homes",
    projectName: "Aspen Estates Showhome",
    status: "pending",
    dueDate: "2026-04-21",
    notes: "Painter deficiency closeout photos and release confirmation still missing."
  },
  {
    id: "3",
    recordNumber: "CMP-003",
    category: "Final deficiency completion package",
    authority: "Parkland Living",
    projectName: "Parkland Multi-Family Phase 2",
    status: "completed",
    completedDate: "2026-04-14",
    notes: "Ready to bundle into the final billing and holdback release request."
  }
];

export async function getComplianceList() {
  return MOCK_COMPLIANCE;
}

export async function getComplianceById(id: string) {
  return MOCK_COMPLIANCE.find((entry) => entry.id === id) ?? null;
}
