export type StaffRecord = {
  id: string;
  name: string;
  role: string;
  department?: string;
  email?: string;
  phone?: string;
  status?: string;
  notes?: string;
};

const MOCK_STAFF: StaffRecord[] = [
  {
    id: '1',
    name: 'Kanwar Sharma',
    role: 'Director',
    department: 'Operations',
    status: 'active'
  }
];

export async function getStaffList() {
  return MOCK_STAFF;
}

export async function getStaffById(id: string) {
  return MOCK_STAFF.find(x => x.id === id) ?? null;
}











