import { prisma } from '../../prisma/prisma.Client.js';
import type { TSearchGames } from '../../types/games/searchGamesSchema.js';

const searchGamesService = async (params: TSearchGames) => {
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
};

export default searchGamesService;
