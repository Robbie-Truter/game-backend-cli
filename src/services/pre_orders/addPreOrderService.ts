import { prisma } from '../../prisma/prisma.Client.js';
import type { TAddPreOrder } from '../../types/pre-orders/addPreOrderSchema.js';
import ApiError from '../../utils/ApiError.js';

export const addPreOrderService = async (params: TAddPreOrder) => {
  const game = await prisma.game.findUnique({
    where: { id: params.gameId },
  });

  if (!game) {
    throw new ApiError('Game not found', 404);
  }

  if (game.status !== 'UPCOMING') {
    throw new ApiError(
      'Cannot pre-order this game, it has already been released',
      400,
    );
  }

  const existingPreOrder = await prisma.preOrder.findFirst({
    where: {
      gameId: params.gameId,
      userId: params.userId,
    },
  });

  if (existingPreOrder) {
    throw new ApiError('You have already pre-ordered this game', 409);
  }

  const preOrder = await prisma.preOrder.create({
    data: params,
  });

  return preOrder;
};
