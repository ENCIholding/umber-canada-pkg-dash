import { z } from "zod";

export const ShipmentsSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type ShipmentsFormValues = z.infer<typeof ShipmentsSchema>;











