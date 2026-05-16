import { prisma } from '../../prisma/prisma.Client.js';
import type { TAddUser } from '../../types/users/addUserSchema.js';

export async function addUserService(payload: TAddUser) {
  const newUser = await prisma.user.create({
    data: payload,
  });

  return newUser;
}
