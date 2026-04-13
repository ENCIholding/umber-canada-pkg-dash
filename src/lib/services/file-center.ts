export type FileRecord = {
  id: string;
  fileName: string;
  category?: string;
  linkedTo?: string;
  projectName?: string;
  status?: string;
  notes?: string;
};

const MOCK_FILES: FileRecord[] = [
  {
    id: '1',
    fileName: 'Building Permit.pdf',
    category: 'Permit',
    projectName: 'Parkallen',
    status: 'active'
  }
];

export async function getFilesList() {
  return MOCK_FILES;
}

export async function getFileById(id: string) {
  return MOCK_FILES.find(x => x.id === id) ?? null;
}







