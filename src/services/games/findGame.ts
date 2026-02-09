import { prisma } from '../../prisma/prisma.Client.js';
import { Prisma } from '../../generated/prisma/client.js';

const findGame = async (name: string) => {
  try {
    const game = await prisma.game.findUnique({
      where: {
        title: name,
      },
    });

    console.log(game);
    return game;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else if (typeof error === 'string') {
      throw new Error(error);
    } else {
      console.error('An unexpected error type occurred:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
};
