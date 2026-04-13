import { z } from "zod";

export const GanttSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type GanttFormValues = z.infer<typeof GanttSchema>;







