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
    id: '1',
    recordNumber: 'CMP-001',
    category: 'Permit',
    authority: 'City of Edmonton',
    projectName: 'Parkallen',
    status: 'pending'
  }
];

export async function getComplianceList() {
  return MOCK_COMPLIANCE;
}

export async function getComplianceById(id: string) {
  return MOCK_COMPLIANCE.find(x => x.id === id) ?? null;
}











