'use server';

import { createPaymentsReceived } from '@/lib/services/payments-received';

export async function createPaymentsReceivedAction(formData: FormData) {
  const payload = {
    receiptNumber: String(formData.get('receiptNumber') ?? ''),
    payerName: String(formData.get('payerName') ?? ''),
    projectName: String(formData.get('projectName') ?? ''),
    category: String(formData.get('category') ?? ''),
    status: String(formData.get('status') ?? 'draft'),
    receivedDate: String(formData.get('receivedDate') ?? ''),
    amount: String(formData.get('amount') ?? ''),
    method: String(formData.get('method') ?? ''),
    referenceNumber: String(formData.get('referenceNumber') ?? ''),
    notes: String(formData.get('notes') ?? ''),
  };

  return await createPaymentsReceived(payload);
}












