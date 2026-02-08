import { type AppError } from '../../middleware/errorMiddleware.js';
import { prisma } from '../../prisma/prisma.Client.js';
import { Prisma } from '../../generated/prisma/client.js';
import type { TCreateUser } from '../../types/users/createUser.js';

export async function createUser(user: TCreateUser) {
  try {
    const newUser = await prisma.user.create({
      data: user,
    });

    return newUser;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // P2002 is the error code for a unique constraint violation
      if (e.code === 'P2002') {
        const err: AppError = new Error(`User with this email already exists.`);
        err.status = 409;
        throw err;
      }
    }
    // For other errors, we re-throw them
    throw e;
  }
}
