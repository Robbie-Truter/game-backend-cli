import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import ApiError from '../utils/ApiError.js';

export const authMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const jwtSecret = config.jwtSecret;

  if (!token) return next(new ApiError('No token provided', 401));

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return next(new ApiError('Failed to authenticate token', 403));

    req.user = decoded as { userId: string };
    next();
  });
};
