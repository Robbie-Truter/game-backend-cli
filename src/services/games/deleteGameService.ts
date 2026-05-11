import { type AppError } from '../../middleware/errorMiddleware.js';
import { prisma } from '../../prisma/prisma.Client.js';
import { Prisma } from '../../generated/prisma/client.js';

export async function deleteGame(id: number) {
  try {
    const deletedGame = await prisma.game.delete({
      where: {
        id: id,
      },
    });

    return deletedGame;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // P2002 is the error code for a unique constraint violation
      if (error) {
        const err: AppError = new Error(`Game with this id does not exist.`);
        err.status = 409;
        throw err;
      }
    }
    // For other errors, we re-throw them
    throw error;
  }
}
