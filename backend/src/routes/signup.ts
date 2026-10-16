import { Router, type Request, type Response } from 'express';
import { db } from '../prisma/db';
import { or } from '@prisma/orm-postgres/orm-client';
import { userSchema } from '../schema/user';
import { ZodError } from "zod";
import { hash } from 'bcrypt';


const signupRouter = Router();


//post route to create a entry in db

signupRouter.post('/signup',async (req:Request,res:Response)=>{
    try {
        
        const validatedData= userSchema.parse(req.body);
        const{email,username,password,name,age}=validatedData;
        // check if already exists email or username
        const existingUser = await db.orm.public.User
            .where((u) => (username ? or(u.email.eq(email), u.username.eq(username)) : u.email.eq(email)))
            .first();
        if(existingUser){
            return res.status(400).json({ error: 'Email or Username already exists.' });
        }  
        // Insert user into the database using Prisma 8 ORM
        const hashedPassword=await hash(password,10);
        
        const newUser = await db.orm.public.User.create({
            email,
            age: Number(age),
            name: name ?? null,
            username: username ?? null,
            password: hashedPassword,
        });
        
        
        res.status(201).json({
            message: 'User created successfully',
        
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

export { signupRouter };
export default signupRouter;
