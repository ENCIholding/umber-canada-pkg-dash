export type TaxationRecord = {
  id: string;
  taxNumber: string;
  type: string;
  jurisdiction?: string;
  projectName?: string;
  status?: string;
  filingDate?: string;
  dueDate?: string;
  amount?: string;
  notes?: string;
};

const MOCK_TAXATION: TaxationRecord[] = [
  {
    id: '1',
    taxNumber: 'GST-001',
    type: 'GST',
    jurisdiction: 'Canada',
    projectName: 'Parkallen',
    status: 'pending'
  }
];

export async function getTaxationList() {
  return MOCK_TAXATION;
}

export async function getTaxationById(id: string) {
  return MOCK_TAXATION.find(x => x.id === id) ?? null;
}











