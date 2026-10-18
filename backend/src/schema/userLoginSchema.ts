import * as z from "zod";

const userLoginSchema = z.object({
    email: z.string().email().optional(),
    username: z.string().optional(),
    password: z.string().min(6),
}).refine((data) => data.email || data.username, {
    message: "Email or username is required",
    path: ["email", "username"],
});

export { userLoginSchema }