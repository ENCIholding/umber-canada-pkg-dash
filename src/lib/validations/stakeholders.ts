import { z } from 'zod';

export const StakeholdersSchema = z.object({
  name: z.string().min(1),
  role: z.string().optional(),
  organization: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
});

export type StakeholdersFormValues = z.infer<typeof StakeholdersSchema>;







