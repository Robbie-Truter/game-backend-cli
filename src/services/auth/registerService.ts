import { prisma } from '../../prisma/prisma.Client.js';
import type { TRegister } from '../../types/auth/registerSchema.js';

export async function registerService(payload: TRegister) {
  const newUser = await prisma.user.create({
    data: payload,
  });

  return newUser;
}
