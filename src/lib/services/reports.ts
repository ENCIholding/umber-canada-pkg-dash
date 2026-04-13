export type ReportsRecord = {
  id: string;
  reportName: string;
  category?: string;
  scope?: string;
  format?: string;
  status?: string;
  owner?: string;
  notes?: string;
};

const MOCK_REPORTS: ReportsRecord[] = [
  {
    id: '1',
    reportName: 'Monthly Finance Summary',
    category: 'Finance',
    scope: 'Company',
    format: 'pdf',
    status: 'draft',
    owner: 'Admin'
  }
];

export async function getReportsList() {
  return MOCK_REPORTS;
}

export async function getReportsById(id: string) {
  return MOCK_REPORTS.find(x => x.id === id) ?? null;
}







