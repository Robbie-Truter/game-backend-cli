import { prisma } from '../../prisma/prisma.Client.js';
import { type TAddGame } from '../../types/games/addGameSchema.js';

export async function addGame(payload: TAddGame) {
  const newGame = await prisma.game.create({
    data: payload,
  });

  return newGame;
}
