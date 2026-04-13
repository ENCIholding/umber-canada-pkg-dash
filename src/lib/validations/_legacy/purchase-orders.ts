import { z } from "zod";

export const purchaseordersSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type purchaseordersFormValues = z.infer<typeof purchaseordersSchema>;