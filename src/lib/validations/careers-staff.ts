import { z } from 'zod';

export const StaffSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  department: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
});

export type StaffFormValues = z.infer<typeof StaffSchema>;







