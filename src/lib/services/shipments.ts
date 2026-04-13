export type ShipmentsFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: ShipmentsFormValues[] = [
  { id: "1", name: "Sample Shipments 1", status: "active" },
  { id: "2", name: "Sample Shipments 2", status: "draft" }
];

export async function getShipmentsList() {
  return MOCK;
}

export async function getShipmentsById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







