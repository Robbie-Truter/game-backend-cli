import { type AppError } from '../../middleware/errorMiddleware.js';
import { prisma } from '../../prisma/prisma.Client.js';
import { Prisma } from '../../generated/prisma/client.js';
import type { TAddUser } from '../../types/users/addUserSchema.js';

export async function addUserService(payload: TAddUser) {
  try {
    const newUser = await prisma.user.create({
      data: payload,
    });

    return newUser;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // P2002 is the error code for a unique constraint violation
      if (error) {
        const err: AppError = new Error(`User with this email already exists.`);
        err.status = 409;
        throw err;
      }
    }
    // For other errors, we re-throw them
    throw error;
  }
}
