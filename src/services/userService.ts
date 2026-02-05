import { type AppError } from '../middleware/errorMiddleware.js';
import { prisma } from '../db/prismaClient.js';
import { Prisma } from '../generated/prisma/client.js';

export async function createUser(user: any) {
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
