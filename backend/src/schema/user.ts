import * as z from "zod";

export const userSchema = z.object({
    email: z.string().email(),
    username: z.string().optional(),
    password: z.string().min(6).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[^A-Za-z0-9]/),
    name: z.string().optional(),
    age: z.number().optional(),
}); 