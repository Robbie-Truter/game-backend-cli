import { type Request, type Response } from 'express';
import { deleteGameService } from '../../services/games/deleteGameService.js';
import { asyncWrapper } from '../../utils/asyncWrapper.js';
import ApiError from '../../utils/ApiError.js';

const deleteGameController = asyncWrapper(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
      throw new ApiError('Game ID is required', 400);
    }

    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new ApiError('Invalid game ID', 400);
    }

    const deletedGame = await deleteGameService(parsedId);
    res.status(200).json(deletedGame);
  },
);

export default deleteGameController;
