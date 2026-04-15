import { z } from 'zod';

export const ExpensesSchema = z.object({
  expenseNumber: z.string().min(1),
  vendorName: z.string().min(1),
  projectName: z.string().min(1),
  category: z.string().optional(),
  status: z.string().optional(),
  expenseDate: z.string().optional(),
  amount: z.string().optional(),
  receiptRef: z.string().optional(),
  notes: z.string().optional(),
});

export type ExpensesFormValues = z.infer<typeof ExpensesSchema>;











