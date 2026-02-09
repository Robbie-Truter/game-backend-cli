import { type Request, type Response, type NextFunction } from 'express';
import { type ZodObject, type ZodRawShape, z } from 'zod';

const validationMiddleware = (schema: ZodObject<ZodRawShape>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const hasQuery = Object.keys(req.query).length !== 0;
      const hasBody = Object.keys(req.body).length !== 0;

      // Still need to validate query params
      /*if (hasQuery) {
      }*/

      if (hasBody) {
        const parsedBody = schema.safeParse(req.body);

        if (!parsedBody.success) {
          const errorMsg = z
            .prettifyError(parsedBody.error)
            .replace(/\n/g, '')
            .trim();

          return res.status(400).json({ message: errorMsg });
        }

        req.body = parsedBody.data;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validationMiddleware;
