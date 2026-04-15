import { z } from 'zod';

export const RentalsSchema = z.object({
  rentalNumber: z.string().min(1),
  assetName: z.string().min(1),
  projectName: z.string().min(1),
  vendorName: z.string().optional(),
  status: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  dailyRate: z.string().optional(),
  totalCost: z.string().optional(),
  notes: z.string().optional(),
});

export type RentalsFormValues = z.infer<typeof RentalsSchema>;











