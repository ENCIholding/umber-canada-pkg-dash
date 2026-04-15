import { z } from 'zod';

export const ReportsSchema = z.object({
  reportName: z.string().min(1),
  category: z.string().optional(),
  scope: z.string().optional(),
  format: z.string().optional(),
  status: z.string().optional(),
  owner: z.string().optional(),
  notes: z.string().optional(),
});

export type ReportsFormValues = z.infer<typeof ReportsSchema>;











