import { prisma } from '../../prisma/prisma.Client.js';
import ApiError from '../../utils/ApiError.js';

interface IAddLibraryItemPayload {
  userId: number;
  gameId: number;
}

const addGameLibraryService = async ({
  userId,
  gameId,
}: IAddLibraryItemPayload) => {
  const game = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!game) {
    throw new ApiError('Game not found', 404);
  }

  const existingItem = await prisma.libraryItem.findUnique({
    where: {
      userId_gameId: {
        userId,
        gameId,
      },
    },
  });

  if (existingItem) {
    throw new ApiError('This game is already in your library', 409);
  }

  const libraryItem = await prisma.libraryItem.create({
    data: {
      userId,
      gameId,
    },
    include: {
      game: {
        select: {
          id: true,
          title: true,
          releaseDate: true,
          status: true,
        },
      },
    },
  });

  return libraryItem;
};

export default addGameLibraryService;
