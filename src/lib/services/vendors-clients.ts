export const MOCK_VENDORS_CLIENTS = [
  {
    id: '1',
    name: 'ABC Lumber',
    type: 'Vendor',
    status: 'active'
  },
  {
    id: '2',
    name: 'Client A',
    type: 'Client',
    status: 'active'
  }
];

export async function getVendorsClientsList() {
  return MOCK_VENDORS_CLIENTS;
}

export async function getVendorsClientsById(id: string) {
  return MOCK_VENDORS_CLIENTS.find(x => x.id === id) ?? null;
}







