import { z } from "zod";

export const calendarSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  status: z.string().optional(),
});

export type calendarFormValues = z.infer<typeof calendarSchema>;



