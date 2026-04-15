import { z } from 'zod';

export const TaxationSchema = z.object({
  taxNumber: z.string().min(1),
  type: z.string().min(1),
  jurisdiction: z.string().optional(),
  projectName: z.string().optional(),
  status: z.string().optional(),
  filingDate: z.string().optional(),
  dueDate: z.string().optional(),
  amount: z.string().optional(),
  notes: z.string().optional(),
});

export type TaxationFormValues = z.infer<typeof TaxationSchema>;











