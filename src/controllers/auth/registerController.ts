import { type Request, type Response, type NextFunction } from 'express';
import { addUserService } from '../../services/users/addUserService.js';
import bcrypt from 'bcrypt';
import { AddUserSchema } from '../../types/users/addUserSchema.js';
import { z } from 'zod';

const registerController = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    z.infer<typeof AddUserSchema>,
    Record<string, never>
  >,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, ...bodyRemainder } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    await addUserService({ ...bodyRemainder, passwordHash });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

export default registerController;
