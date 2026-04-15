'use server';

import { createPaymentsSent } from '@/lib/services/payments-sent';

export async function createPaymentsSentAction(formData: FormData) {
  const payload = {
    paymentNumber: String(formData.get('paymentNumber') ?? ''),
    payeeName: String(formData.get('payeeName') ?? ''),
    projectName: String(formData.get('projectName') ?? ''),
    category: String(formData.get('category') ?? ''),
    status: String(formData.get('status') ?? 'draft'),
    paymentDate: String(formData.get('paymentDate') ?? ''),
    amount: String(formData.get('amount') ?? ''),
    method: String(formData.get('method') ?? ''),
    referenceNumber: String(formData.get('referenceNumber') ?? ''),
    notes: String(formData.get('notes') ?? ''),
  };

  return await createPaymentsSent(payload);
}












