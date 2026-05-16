import jwt from 'jsonwebtoken';
import config from '../../config/config.js';
import loginService from '../../services/auth/loginService.js';
import { asyncWrapper } from '../../utils/asyncWrapper.js';

const loginController = asyncWrapper(async (req, res) => {
  const payload = await loginService(req.body);

  const accessToken = jwt.sign(payload, config.jwtSecret, {
    expiresIn: '15m',
  });
  const refreshToken = jwt.sign(payload, config.refreshTokenSecret, {
    expiresIn: '7d',
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({ accessToken });
});

export default loginController;
