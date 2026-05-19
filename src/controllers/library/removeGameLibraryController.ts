import { type Request, type Response } from 'express';
import { asyncWrapper } from '../../utils/asyncWrapper.js';
import removeGameLibraryService from '../../services/library/removeGameLibraryService.js';
import ApiError from '../../utils/ApiError.js';

const removeGameLibraryController = asyncWrapper(
  async (req: Request, res: Response) => {
    const gameIdRaw = req.params.gameId;

    if (!gameIdRaw || typeof gameIdRaw !== 'string') {
      throw new ApiError('Invalid game ID', 400);
    }

    const gameId = parseInt(gameIdRaw, 10);

    if (isNaN(gameId)) {
      throw new ApiError('Invalid game ID', 400);
    }

    const user = req.user as { sub: string; role: string };
    const userId = parseInt(user.sub, 10);

    if (isNaN(userId)) {
      throw new ApiError('Invalid user ID in token', 401);
    }

    await removeGameLibraryService({ userId, gameId });

    return res.status(200).json({
      message: 'Game removed from library successfully',
    });
  },
);

export default removeGameLibraryController;
