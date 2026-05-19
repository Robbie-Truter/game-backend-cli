import type { Request, Response } from 'express';
import { addPreOrderService } from '../../services/pre_orders/addPreOrderService.js';
import { asyncWrapper } from '../../utils/asyncWrapper.js';
import ApiError from '../../utils/ApiError.js';

const addPreOrderController = asyncWrapper(
  async (req: Request, res: Response) => {
    const { gameId } = req.body || {};

    if (!gameId) {
      throw new ApiError('Game ID is required', 400);
    }

    const { sub } = req.user as { sub: string; role: string };
    const userId = parseInt(sub, 10);

    if (isNaN(userId)) {
      throw new ApiError('Invalid user ID in token', 401);
    }

    const newPreOrder = await addPreOrderService({ gameId, userId });

    return res.status(201).json(newPreOrder);
  },
);

export default addPreOrderController;
