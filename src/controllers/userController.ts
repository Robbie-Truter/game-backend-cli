import { type NextFunction, type Request, type Response } from 'express';
import { createUser } from '../services/userService.js';

export async function createUserController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Email and name are required' });
    }

    const newUser = await createUser({ email, name });
    res.status(201).json(newUser);
  } catch (error: unknown) {
    next(error);
  }
}
