export type PaymentsSentRecord = {
  id: string;
  paymentNumber: string;
  payeeName: string;
  projectName: string;
  category?: string;
  status?: string;
  paymentDate?: string;
  amount?: string;
  method?: string;
  referenceNumber?: string;
  notes?: string;
  createdAt?: string;
};

const MOCK_PAYMENTS_SENT: PaymentsSentRecord[] = [
  {
    id: '1',
    paymentNumber: 'PS-001',
    payeeName: 'ABC Lumber',
    projectName: 'Parkallen Fourplex',
    category: 'Materials',
    status: 'paid',
    paymentDate: '2026-04-11',
    amount: '3500.00',
    method: 'EFT',
    referenceNumber: 'EFT-1001',
    notes: 'Framing lumber deposit',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    paymentNumber: 'PS-002',
    payeeName: 'Northwest Plumbing',
    projectName: 'Restaurant Interior',
    category: 'Subcontractor',
    status: 'scheduled',
    paymentDate: '2026-04-13',
    amount: '1800.00',
    method: 'Cheque',
    referenceNumber: 'CHK-205',
    notes: 'Rough-in stage payment',
    createdAt: new Date().toISOString(),
  },
];

export async function getPaymentsSentList() {
  return MOCK_PAYMENTS_SENT;
}

export async function getPaymentsSentById(id: string) {
  return MOCK_PAYMENTS_SENT.find((x) => x.id === id) ?? null;
}

export async function createPaymentsSent(payload: Omit<PaymentsSentRecord, 'id' | 'createdAt'>) {
  return {
    id: String(MOCK_PAYMENTS_SENT.length + 1),
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

export async function updatePaymentsSent(id: string, payload: Partial<PaymentsSentRecord>) {
  return { id, ...payload };
}

export async function deletePaymentsSent(id: string) {
  return { success: true, id };
}







