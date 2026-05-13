import { type Request, type Response, type NextFunction } from 'express';
import { deleteGame } from '../../services/games/deleteGameService.js';

const deleteGameController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const deletedGame = await deleteGame(Number(id));
    res.status(200).json(deletedGame);
  } catch (error) {
    next(error);
  }
};

export default deleteGameController;
