import { type Request, type Response } from 'express';
import { deleteGame } from '../../services/games/deleteGameService.js';
import { asyncWrapper } from '../../utils/asyncWrapper.js';

const deleteGameController = asyncWrapper(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedGame = await deleteGame(Number(id));
    res.status(200).json(deletedGame);
  },
);

export default deleteGameController;
