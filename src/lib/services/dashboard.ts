export type DashboardFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: DashboardFormValues[] = [
  { id: "1", name: "Sample Dashboard 1", status: "active" },
  { id: "2", name: "Sample Dashboard 2", status: "draft" }
];

export async function getDashboardList() {
  return MOCK;
}

export async function getDashboardById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







