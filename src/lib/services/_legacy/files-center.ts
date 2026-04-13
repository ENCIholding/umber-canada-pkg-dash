export type filescenterFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: filescenterFormValues[] = [
  { id: "1", name: "Sample FilesCenter 1", status: "active" },
  { id: "2", name: "Sample FilesCenter 2", status: "draft" }
];

export async function getfilescenterList() {
  return MOCK;
}

export async function getfilescenterById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}