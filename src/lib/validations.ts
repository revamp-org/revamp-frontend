import { z } from "zod";

export const goalSchemaValidation = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .max(255, { message: "Title must be less than 255 characters" }),
  description: z.string().optional().nullable(),
  priority: z.string().optional().nullable(),
  deadline: z.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user_id: z.number().optional(),
});
