import { type Request, type Response } from 'express';

export const notFoundMiddleware = (_req: Request, res: Response) =>
  res.status(404).send('Route not found');
