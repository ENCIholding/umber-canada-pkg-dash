import { z } from 'zod';

export const ComplianceSchema = z.object({
  recordNumber: z.string().min(1),
  category: z.string().min(1),
  authority: z.string().optional(),
  projectName: z.string().optional(),
  status: z.string().optional(),
  dueDate: z.string().optional(),
  completedDate: z.string().optional(),
  notes: z.string().optional(),
});

export type ComplianceFormValues = z.infer<typeof ComplianceSchema>;







