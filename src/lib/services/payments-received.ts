export type PaymentsReceivedRecord = {
  id: string;
  receiptNumber: string;
  payerName: string;
  projectName: string;
  category?: string;
  status?: string;
  receivedDate?: string;
  amount?: string;
  method?: string;
  referenceNumber?: string;
  notes?: string;
  createdAt?: string;
};

const MOCK_PAYMENTS_RECEIVED: PaymentsReceivedRecord[] = [
  {
    id: '1',
    receiptNumber: 'PR-001',
    payerName: 'Client A',
    projectName: 'Parkallen Fourplex',
    category: 'Deposit',
    status: 'received',
    receivedDate: '2026-04-11',
    amount: '10000.00',
    method: 'EFT',
    referenceNumber: 'EFT-IN-3001',
    notes: 'Initial client deposit',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    receiptNumber: 'PR-002',
    payerName: 'Tenant Improvement Client',
    projectName: 'Restaurant Interior',
    category: 'Progress Payment',
    status: 'cleared',
    receivedDate: '2026-04-12',
    amount: '7500.00',
    method: 'Cheque',
    referenceNumber: 'CHK-IN-122',
    notes: 'Second draw payment',
    createdAt: new Date().toISOString(),
  },
];

export async function getPaymentsReceivedList() {
  return MOCK_PAYMENTS_RECEIVED;
}

export async function getPaymentsReceivedById(id: string) {
  return MOCK_PAYMENTS_RECEIVED.find((x) => x.id === id) ?? null;
}

export async function createPaymentsReceived(payload: Omit<PaymentsReceivedRecord, 'id' | 'createdAt'>) {
  return {
    id: String(MOCK_PAYMENTS_RECEIVED.length + 1),
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

export async function updatePaymentsReceived(id: string, payload: Partial<PaymentsReceivedRecord>) {
  return { id, ...payload };
}

export async function deletePaymentsReceived(id: string) {
  return { success: true, id };
}







