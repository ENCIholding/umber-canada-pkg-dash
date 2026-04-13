export type MasterDbFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: MasterDbFormValues[] = [
  { id: "1", name: "Sample MasterDb 1", status: "active" },
  { id: "2", name: "Sample MasterDb 2", status: "draft" }
];

export async function getMasterDbList() {
  return MOCK;
}

export async function getMasterDbById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







