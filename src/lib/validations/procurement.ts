import { z } from 'zod';

export const ProcurementSchema = z.object({
  id: z.string().optional(),
  poNumber: z.string().min(1, 'PO Number is required'),
  vendorName: z.string().min(1, 'Vendor Name is required'),
  projectName: z.string().min(1, 'Project Name is required'),
  status: z.string().optional(),
  orderDate: z.string().optional(),
  expectedDate: z.string().optional(),
  totalAmount: z.string().optional(),
  notes: z.string().optional(),
});

export type ProcurementFormValues = z.infer<typeof ProcurementSchema>;











