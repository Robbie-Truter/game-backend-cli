import { prisma } from '../../prisma/prisma.Client.js';
import type { TLoginUser } from '../../types/auth/loginSchema.js';
import bcrypt from 'bcrypt';
import ApiError from '../../utils/ApiError.js';

const loginService = async (requestPayload: TLoginUser) => {
  const { email, password } = requestPayload;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new ApiError('Invalid email or password', 401);
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    throw new ApiError('Invalid email or password', 401);
  }

  return {
    sub: user.id.toString(),
    role: user.role,
  };
};

export default loginService;
