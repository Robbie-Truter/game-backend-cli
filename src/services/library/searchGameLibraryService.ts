import { prisma } from '../../prisma/prisma.Client.js';
import type { TSearchGameLibrary } from '../../types/library/searchGameLibrarySchema.js';

const searchGameLibraryService = async (
  userId: number,
  params: TSearchGameLibrary,
) => {
  const libraryItems = await prisma.libraryItem.findMany({
    where: {
      userId,
      game: {
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
    orderBy: {
      createdAt: 'desc',
    },
  });

  return libraryItems;
};

export default searchGameLibraryService;
