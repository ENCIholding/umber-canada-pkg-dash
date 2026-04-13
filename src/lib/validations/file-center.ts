import { z } from 'zod';

export const FileSchema = z.object({
  fileName: z.string().min(1),
  category: z.string().optional(),
  linkedTo: z.string().optional(),
  projectName: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
});

export type FileFormValues = z.infer<typeof FileSchema>;







