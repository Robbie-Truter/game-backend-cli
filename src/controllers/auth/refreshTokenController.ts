import { type Request, type Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config/config.js';
import type { TokenPayload } from '../../types/auth/refreshTokenSchema.js';

const refreshTokenController = (req: Request, res: Response) => {
  const token = req.cookies?.refreshToken;

  if (!token) {
    return res.status(401).json({ message: 'Refresh token missing' });
  }

  jwt.verify(
    token,
    config.refreshTokenSecret,
    (
      err: jwt.VerifyErrors | null,
      decoded: string | jwt.JwtPayload | undefined,
    ) => {
      if (err || !decoded || typeof decoded === 'string') {
        return res
          .status(403)
          .json({ message: 'Invalid or expired refresh token' });
      }

      const payload = decoded as TokenPayload;

      // Additional checks (e.g., token version) happen here

      const newAccessToken = jwt.sign(
        { sub: payload.sub, role: payload.role },
        config.jwtSecret,
        { expiresIn: '15m' },
      );

      // A new refresh token will also be generated here if using rotation
      return res.json({ accessToken: newAccessToken });
    },
  );
};

export default refreshTokenController;
