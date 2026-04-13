import { z } from "zod";

export const ProjectsSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type ProjectsFormValues = z.infer<typeof ProjectsSchema>;







