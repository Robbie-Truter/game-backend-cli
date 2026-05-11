import { prisma } from '../../prisma/prisma.Client.js';
import type { TSearchGames } from '../../types/games/searchGamesSchema.js';

const searchGamesService = async (params: TSearchGames) => {
  try {
    const game = await prisma.game.findMany({
      where: {
        ...(params.title && {
          title: {
            contains: params.title,
            mode: 'insensitive',
          },
        }),

        ...(params.status && {
          status: params.status,
        }),

        ...(params.releaseDate && {
          releaseDate: params.releaseDate,
        }),
      },
    });

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

export default searchGamesService;
