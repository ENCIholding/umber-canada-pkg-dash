export type purchaseordersFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: purchaseordersFormValues[] = [
  { id: "1", name: "Sample PurchaseOrders 1", status: "active" },
  { id: "2", name: "Sample PurchaseOrders 2", status: "draft" }
];

export async function getpurchaseordersList() {
  return MOCK;
}

export async function getpurchaseordersById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}