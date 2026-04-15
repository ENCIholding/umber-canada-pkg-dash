import { z } from "zod";

export const FinanceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type FinanceFormValues = z.infer<typeof FinanceSchema>;











