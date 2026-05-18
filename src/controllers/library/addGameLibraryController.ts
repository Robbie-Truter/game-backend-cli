import { type Request, type Response } from 'express';
import { asyncWrapper } from '../../utils/asyncWrapper.js';
import addGameLibraryService from '../../services/library/addGameLibraryService.js';
import ApiError from '../../utils/ApiError.js';

const addGameLibraryController = asyncWrapper(
  async (req: Request, res: Response) => {
    const { gameId } = req.body ?? {};

    if (!gameId) {
      throw new ApiError('Game ID is required', 400);
    }

    const user = req.user as { sub: string; role: string };
    const userId = parseInt(user.sub, 10);

    if (isNaN(userId)) {
      throw new ApiError('Invalid user ID in token', 401);
    }

    const libraryItem = await addGameLibraryService({ userId, gameId });

    return res.status(201).json({
      message: 'Game added to library successfully',
      libraryItem,
    });
  },
);

export default addGameLibraryController;
