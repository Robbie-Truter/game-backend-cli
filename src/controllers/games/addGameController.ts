import { type Request, type Response, type NextFunction } from 'express';
import { addGame } from '../../services/games/addGameService.js';

const addGameController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newGame = await addGame(req.body);

    res.status(201).json(newGame);
  } catch (error) {
    next(error);
  }
};

export default addGameController;
