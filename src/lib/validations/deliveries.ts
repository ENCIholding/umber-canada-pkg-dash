import { z } from "zod";

export const DeliveriesSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type DeliveriesFormValues = z.infer<typeof DeliveriesSchema>;







