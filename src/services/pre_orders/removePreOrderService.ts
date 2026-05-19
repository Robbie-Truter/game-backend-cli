import { prisma } from '../../prisma/prisma.Client.js';
import ApiError from '../../utils/ApiError.js';

interface IRemovePreOrderPayload {
  userId: number;
  gameId: number;
}

export const removePreOrderService = async ({
  userId,
  gameId,
}: IRemovePreOrderPayload) => {
  // Check if the pre-order exists
  const existingPreOrder = await prisma.preOrder.findUnique({
    where: {
      userId_gameId: {
        userId,
        gameId,
      },
    },
  });

  if (!existingPreOrder) {
    throw new ApiError('Pre-order not found', 404);
  }

  // Delete it
  await prisma.preOrder.delete({
    where: {
      userId_gameId: {
        userId,
        gameId,
      },
    },
  });
};
