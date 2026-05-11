import { type Request, type Response, type NextFunction } from 'express';
import { type ZodObject, type ZodRawShape, z } from 'zod';

const createErrorMsg = (error: z.ZodError<Record<string, unknown>>) =>
  z.prettifyError(error).replace(/\n/g, '').trim();

// --- Middleware to validate payload or query params using zod ---
const validationMiddleware = (schema: ZodObject<ZodRawShape>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const hasQuery = req.query && Object.keys(req.query).length !== 0;
      const hasBody = req.body && Object.keys(req.body).length !== 0;
      const hasParams = req.params && Object.keys(req.params).length !== 0;

      if (hasParams) {
        const parsedParams = schema.safeParse(req.params);
        if (!parsedParams.success) {
          const errorMsg = createErrorMsg(parsedParams.error);
          return res.status(400).json({ message: errorMsg });
        }
      }

      if (hasQuery) {
        const parsedBody = schema.safeParse(req.query);
        if (!parsedBody.success) {
          const errorMsg = createErrorMsg(parsedBody.error);

          return res.status(400).json({ message: errorMsg });
        }
      }

      if (hasBody) {
        const parsedBody = schema.safeParse(req.body);

        if (!parsedBody.success) {
          const errorMsg = createErrorMsg(parsedBody.error);
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
