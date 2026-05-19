import { prisma } from '../../prisma/prisma.Client.js';

export async function deleteGameService(id: number) {
  const deletedGame = await prisma.game.delete({
    where: {
      id: id,
    },
  });

  return deletedGame;
}
