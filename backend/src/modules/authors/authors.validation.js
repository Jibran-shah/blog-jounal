import { z } from "zod";

export const updateAuthorSchema = z
  .object({
    name: z.string().trim().min(2).max(50).optional(),

    bio: z.string().trim().max(300).optional(),

    avatar: z
      .object({
        url: z.string().url(),
        publicId: z.string().min(1),
      })
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required",
  });
