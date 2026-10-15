import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from './prisma/contract';
import contractJson from './prisma/contract.json' with { type: 'json' };

// Load .env variables
dotenv.config();

const app = express();
app.use(express.json());

// Initialize Prisma 8 Postgres client
const db = postgres<Contract>({
  contractJson,
  url: process.env.DATABASE_URL!,
});

// Health check route
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Server is running' });
});

// Route to get all users
app.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = await db.orm.public.User.all();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Route to create a new user in the User table
app.post('/users', async (req: Request, res: Response) => {
  try {
    const { email, name, username, password, age } = req.body;

    if (!email || age === undefined) {
      return res.status(400).json({ error: 'Email and age are required.' });
    }

    // Insert user into the database using Prisma 8 ORM
    const newUser = await db.orm.public.User.create({
      email,
      age: Number(age),
      name: name ?? null,
      username: username ?? null,
      password: password ?? null,
    });

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error: any) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: error.message || 'Failed to create user' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
