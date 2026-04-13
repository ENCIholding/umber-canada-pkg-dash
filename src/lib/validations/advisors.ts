import { z } from "zod";

export const AdvisorsSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type AdvisorsFormValues = z.infer<typeof AdvisorsSchema>;







