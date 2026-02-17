import { type Request, type Response, type NextFunction } from 'express';
import { addUserService } from '../../services/users/addUserService.js';

const addUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newUser = addUserService(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export default addUserController;
