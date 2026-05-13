import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      /**
       * The decoded JWT payload.
       * Explicitly includes 'undefined' to satisfy 'exactOptionalPropertyTypes: true' in tsconfig.json.
       */
      user?: string | JwtPayload | undefined;
    }
  }
}
