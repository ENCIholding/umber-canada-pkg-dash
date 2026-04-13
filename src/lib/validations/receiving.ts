import { z } from "zod";

export const ReceivingSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type ReceivingFormValues = z.infer<typeof ReceivingSchema>;







