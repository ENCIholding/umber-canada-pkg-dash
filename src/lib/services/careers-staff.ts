export type StaffRecord = {
  id: string;
  name: string;
  role: string;
  department?: string;
  email?: string;
  phone?: string;
  status?: string;
  notes?: string;
  hireDate?: string;
  wageBand?: string;
  documentStatus?: string;
};

const MOCK_STAFF: StaffRecord[] = [
  {
    id: "staff-1",
    name: "Kanwar Sharma",
    role: "Director",
    department: "Operations",
    email: "kanwar@umbercanada.ca",
    phone: "+17805550111",
    status: "active",
    hireDate: "2023-01-02",
    wageBand: "Leadership",
    documentStatus: "complete",
    notes: "Oversees commercial installs, finance review, and vendor escalation paths."
  },
  {
    id: "staff-2",
    name: "Raman Bedi",
    role: "Project Coordinator",
    department: "Projects",
    email: "raman@umbercanada.ca",
    phone: "+17805550112",
    status: "active",
    hireDate: "2024-06-10",
    wageBand: "Operations",
    documentStatus: "complete",
    notes: "Owns release gates, access confirmations, and site-readiness follow-up."
  },
  {
    id: "staff-3",
    name: "Mehak Gill",
    role: "Warehouse / Receiving Lead",
    department: "Logistics",
    email: "mehak@umbercanada.ca",
    phone: "+17805550113",
    status: "active",
    hireDate: "2024-09-16",
    wageBand: "Field ops",
    documentStatus: "pending forklift renewal",
    notes: "Tracks staging lanes, shortages, damages, and outbound site releases."
  }
];

export async function getStaffList() {
  return MOCK_STAFF;
}

export async function getStaffById(id: string) {
  return MOCK_STAFF.find((entry) => entry.id === id) ?? null;
}
