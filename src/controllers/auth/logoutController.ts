import { type Request, type Response } from 'express';

const logoutController = (_req: Request, res: Response) => {
  // Clear the secure HTTP-only refresh token cookie
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  return res.status(200).json({ message: 'Logged out successfully' });
};

export default logoutController;
