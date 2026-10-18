import { Router, type Request, type Response } from 'express';
import { db } from '../prisma/db';
import { userLoginSchema } from '../schema/userLoginSchema';
import { ZodError } from "zod";
import bcrypt from 'bcrypt';
import {generateAccessToken, generateRefreshToken } from '../utils/token';


const signinRouter = Router();


signinRouter.post("/signin", async (req: Request, res: Response) => {
    try {
        const validatedData = userLoginSchema.parse(req.body);
        const { email, password,username } = validatedData;
        // check in database if user exists
        const existingUser = await db.orm.public.User
    .where((user) => {
        if (email) {
            return user.email.eq(email);
        } else if (username) {
            return user.username.eq(username);
        }
        throw new Error("Email or username is required");
    })
    .first();

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        if (!existingUser.password) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }
        // compare password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password.' });
        }
        const accessToken = generateAccessToken({
            userId: existingUser.id,
            email: existingUser.email,
        });
        const refreshToken = generateRefreshToken({
            userId: existingUser.id,
            email: existingUser.email,
        });
        res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});
        return res.status(200).json({
    message: 'Signed in successfully',
    accessToken,
});
        

    } catch (error) {
        if(error instanceof ZodError){
            return res.status(400).json({
                errors: error.flatten().fieldErrors,
            });
        }
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
    
    
})


export { signinRouter }