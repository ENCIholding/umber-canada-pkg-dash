export type DeliveriesFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: DeliveriesFormValues[] = [
  { id: "1", name: "Sample Deliveries 1", status: "active" },
  { id: "2", name: "Sample Deliveries 2", status: "draft" }
];

export async function getDeliveriesList() {
  return MOCK;
}

export async function getDeliveriesById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







