import type { Request, Response } from 'express';
import { removePreOrderService } from '../../services/pre_orders/removePreOrderService.js';
import { asyncWrapper } from '../../utils/asyncWrapper.js';
import ApiError from '../../utils/ApiError.js';

const removePreOrderController = asyncWrapper(
  async (req: Request, res: Response) => {
    const { gameId } = req.params;

    if (!gameId || typeof gameId !== 'string') {
      throw new ApiError('Game ID is required', 400);
    }

    const parsedGameId = parseInt(gameId, 10);
    if (isNaN(parsedGameId)) {
      throw new ApiError('Invalid game ID', 400);
    }

    const { sub } = req.user as { sub: string; role: string };
    const userId = parseInt(sub, 10);

    if (isNaN(userId)) {
      throw new ApiError('Invalid user ID in token', 401);
    }

    await removePreOrderService({ userId, gameId: parsedGameId });

    return res.status(200).json({
      message: 'Pre-order cancelled successfully',
    });
  },
);

export default removePreOrderController;
