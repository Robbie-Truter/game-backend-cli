import type { Request, Response } from 'express';
import { addPreOrderService } from '../../services/pre_orders/addPreOrderService.js';
import { asyncWrapper } from '../../utils/asyncWrapper.js';

const addPreOrderController = asyncWrapper(
  async (req: Request, res: Response) => {
    const { gameId } = req.body || {};
    const { sub } = req.user as { sub: string; role: string };

    const userId = parseInt(sub, 10);

    const newPreOrder = await addPreOrderService({ gameId, userId });

    return res.status(201).json(newPreOrder);
  },
);

export default addPreOrderController;
