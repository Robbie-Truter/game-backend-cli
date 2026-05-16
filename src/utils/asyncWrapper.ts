import {
  type Request,
  type Response,
  type NextFunction,
  type RequestHandler,
} from 'express';

/**
 * A wrapper for async Express route handlers.
 * Eliminates the need for try/catch blocks in every controller.
 */
export const asyncWrapper = (fn: RequestHandler): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
