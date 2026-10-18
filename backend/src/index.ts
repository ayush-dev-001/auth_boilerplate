import express from 'express';
import type { Request, Response } from 'express';
import {signupRouter,} from './routes/signup' 
import { signinRouter } from './routes/signin';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cookieParser());


app.use("/api",signupRouter);
app.use("/api",signinRouter);


// app.post('/users', async (req: Request, res: Response) => {
//   try {
//     const { email, name, username, password, age } = req.body;

//     if (!email || age === undefined) {
//       return res.status(400).json({ error: 'Email and age are required.' });
//     }

//     // Insert user into the database using Prisma 8 ORM
//     const newUser = await db.orm.public.User.create({
//       email,
//       age: Number(age),
//       name: name ?? null,
//       username: username ?? null,
//       password: password ?? null,
//     });

//     res.status(201).json({
//       message: 'User created successfully',
//       user: newUser,
//     });
//   } catch (error: any) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: error.message || 'Failed to create user' });
//   }
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
