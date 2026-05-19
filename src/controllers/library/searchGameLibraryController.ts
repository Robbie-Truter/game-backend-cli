import { type Request, type Response } from 'express';
import { asyncWrapper } from '../../utils/asyncWrapper.js';
import searchGameLibraryService from '../../services/library/searchGameLibraryService.js';
import ApiError from '../../utils/ApiError.js';

const searchGameLibraryController = asyncWrapper(
  async (req: Request, res: Response) => {
    const user = req.user as { sub: string; role: string };
    const userId = parseInt(user.sub, 10);

    if (isNaN(userId)) {
      throw new ApiError('Invalid user ID in token', 401);
    }

    const libraryItems = await searchGameLibraryService(userId, req.query);

    return res.status(200).json({
      libraryItems,
    });
  },
);

export default searchGameLibraryController;
