import { type Request, type Response, type NextFunction } from 'express';
import { Prisma } from '../generated/prisma/client.js';
import ApiError from '../utils/ApiError.js';

export interface AppError extends Error {
  status?: number;
}

// Translate common prisma error codes into readable error messages
const translatePrismaError = (error: Prisma.PrismaClientKnownRequestError) => {
  switch (error.code) {
    case 'P2002':
      return new ApiError('Record already exists.', 409);
    case 'P2025':
      return new ApiError('Record not found.', 404);
    default:
      return new ApiError(error.message, 500);
  }
};

export const errorMiddleware = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    err = translatePrismaError(err);
  }

  // Handle JWT errors centrally
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    err = new ApiError('Invalid or expired token', 403);
  }

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
};
