import { z } from "zod";

export const MasterDbSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type MasterDbFormValues = z.infer<typeof MasterDbSchema>;







