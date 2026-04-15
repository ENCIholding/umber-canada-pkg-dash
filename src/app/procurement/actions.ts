'use server';

import { createProcurement } from '@/lib/services/procurement';

export async function createProcurementAction(formData: FormData) {
  const payload = {
    poNumber: String(formData.get('poNumber') ?? ''),
    vendorName: String(formData.get('vendorName') ?? ''),
    projectName: String(formData.get('projectName') ?? ''),
    status: String(formData.get('status') ?? 'draft'),
    orderDate: String(formData.get('orderDate') ?? ''),
    expectedDate: String(formData.get('expectedDate') ?? ''),
    totalAmount: String(formData.get('totalAmount') ?? ''),
    notes: String(formData.get('notes') ?? ''),
  };

  return await createProcurement(payload);
}












