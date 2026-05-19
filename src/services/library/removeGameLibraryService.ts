import { prisma } from '../../prisma/prisma.Client.js';
import ApiError from '../../utils/ApiError.js';

interface IRemoveLibraryItemPayload {
  userId: number;
  gameId: number;
}

const removeGameLibraryService = async ({
  userId,
  gameId,
}: IRemoveLibraryItemPayload) => {
  // Check if it exists in the library
  const existingItem = await prisma.libraryItem.findUnique({
    where: {
      userId_gameId: {
        userId,
        gameId,
      },
    },
  });

  if (!existingItem) {
    throw new ApiError('Game not found in your library', 404);
  }

  // Delete it
  await prisma.libraryItem.delete({
    where: {
      userId_gameId: {
        userId,
        gameId,
      },
    },
  });
};

export default removeGameLibraryService;
