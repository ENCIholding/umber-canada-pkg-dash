import { z } from "zod";

export const EmailSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type EmailFormValues = z.infer<typeof EmailSchema>;







