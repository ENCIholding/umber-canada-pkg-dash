import { z } from 'zod';

export const VendorsClientsSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  email: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
});

export type VendorsClientsFormValues = z.infer<typeof VendorsClientsSchema>;











