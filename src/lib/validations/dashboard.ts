import { z } from "zod";

export const DashboardSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type DashboardFormValues = z.infer<typeof DashboardSchema>;











