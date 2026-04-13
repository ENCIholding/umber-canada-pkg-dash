import { z } from 'zod';

export const PaymentsSentSchema = z.object({
  id: z.string().optional(),
  paymentNumber: z.string().min(1, 'Payment Number is required'),
  payeeName: z.string().min(1, 'Payee Name is required'),
  projectName: z.string().min(1, 'Project Name is required'),
  category: z.string().optional(),
  status: z.string().optional(),
  paymentDate: z.string().optional(),
  amount: z.string().optional(),
  method: z.string().optional(),
  referenceNumber: z.string().optional(),
  notes: z.string().optional(),
});

export type PaymentsSentFormValues = z.infer<typeof PaymentsSentSchema>;







