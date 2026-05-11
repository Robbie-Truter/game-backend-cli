import { type Request, type Response, type NextFunction } from 'express';
import { addUserService } from '../../services/users/addUserService.js';
import bcrypt from 'bcrypt';

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { passwordHash, ...bodyRemainder } = req.body;

    if (passwordHash.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password should be at least 6 characters long' });
    }

    const hashedPassword = await bcrypt.hash(passwordHash, 10);

    await addUserService({
      ...bodyRemainder,
      passwordHash: hashedPassword,
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

export default registerController;
