export type ReceivingFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: ReceivingFormValues[] = [
  { id: "1", name: "Sample Receiving 1", status: "active" },
  { id: "2", name: "Sample Receiving 2", status: "draft" }
];

export async function getReceivingList() {
  return MOCK;
}

export async function getReceivingById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







