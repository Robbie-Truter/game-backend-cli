import { type AppError } from '../../middleware/errorMiddleware.js';
import { prisma } from '../../prisma/prisma.Client.js';
import { Prisma } from '../../generated/prisma/client.js';
import { type TAddGame } from '../../types/games/addGame.js';

export async function addGame(payload: TAddGame) {
  try {
    const newGame = await prisma.game.create({
      data: payload,
    });

    return newGame;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // P2002 is the error code for a unique constraint violation
      if (error) {
        const err: AppError = new Error(`User with this email already exists.`);
        err.status = 409;
        throw err;
      }
    }
    // For other errors, we re-throw them
    throw error;
  }
}
