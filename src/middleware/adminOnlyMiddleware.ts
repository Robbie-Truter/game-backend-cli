import type { Request, Response, NextFunction } from 'express';
import type { JwtPayload } from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';

export const adminOnlyMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  if (!req.user || (req.user as JwtPayload)?.role !== 'admin') {
    return next(new ApiError('Access denied', 403));
  }

  next();
};
