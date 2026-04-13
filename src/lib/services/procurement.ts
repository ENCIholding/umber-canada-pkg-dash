export type ProcurementRecord = {
  id: string;
  poNumber: string;
  vendorName: string;
  projectName: string;
  status?: string;
  orderDate?: string;
  expectedDate?: string;
  totalAmount?: string;
  notes?: string;
  createdAt?: string;
};

const MOCK_PROCUREMENT: ProcurementRecord[] = [
  {
    id: '1',
    poNumber: 'PO-001',
    vendorName: 'ABC Supply',
    projectName: 'Parkallen Fourplex',
    status: 'active',
    orderDate: '2026-04-11',
    expectedDate: '2026-04-18',
    totalAmount: '12500.00',
    notes: 'Initial framing materials',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    poNumber: 'PO-002',
    vendorName: 'Northwest Electrical',
    projectName: 'Restaurant Interior',
    status: 'draft',
    orderDate: '2026-04-12',
    expectedDate: '2026-04-20',
    totalAmount: '4800.00',
    notes: 'Electrical rough-in package',
    createdAt: new Date().toISOString(),
  },
];

export async function getProcurementList() {
  return MOCK_PROCUREMENT;
}

export async function getProcurementById(id: string) {
  return MOCK_PROCUREMENT.find((x) => x.id === id) ?? null;
}

export async function createProcurement(payload: Omit<ProcurementRecord, 'id' | 'createdAt'>) {
  return {
    id: String(MOCK_PROCUREMENT.length + 1),
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

export async function updateProcurement(id: string, payload: Partial<ProcurementRecord>) {
  return { id, ...payload };
}

export async function deleteProcurement(id: string) {
  return { success: true, id };
}







