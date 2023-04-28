import { z } from "zod";

export const newSchema = z.object({
    name: z.string().min(1),
    username: z.string().min(1),
    password: z.string().min(1)
});
