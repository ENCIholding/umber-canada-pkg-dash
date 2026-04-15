import { z } from 'zod';

export const PaymentsReceivedSchema = z.object({
  id: z.string().optional(),
  receiptNumber: z.string().min(1, 'Receipt Number is required'),
  payerName: z.string().min(1, 'Payer Name is required'),
  projectName: z.string().min(1, 'Project Name is required'),
  category: z.string().optional(),
  status: z.string().optional(),
  receivedDate: z.string().optional(),
  amount: z.string().optional(),
  method: z.string().optional(),
  referenceNumber: z.string().optional(),
  notes: z.string().optional(),
});

export type PaymentsReceivedFormValues = z.infer<typeof PaymentsReceivedSchema>;











