export const MOCK_STAKEHOLDERS = [
  {
    id: '1',
    name: 'City Inspector',
    role: 'Inspector',
    organization: 'City of Edmonton',
    status: 'active'
  },
  {
    id: '2',
    name: 'Project Owner',
    role: 'Owner',
    organization: 'Private',
    status: 'active'
  }
];

export async function getStakeholdersList() {
  return MOCK_STAKEHOLDERS;
}

export async function getStakeholdersById(id: string) {
  return MOCK_STAKEHOLDERS.find(x => x.id === id) ?? null;
}







