import { prisma } from '../../prisma/prisma.Client.js';
import type { TLoginUser } from '../../types/auth/loginSchema.js';
import bcrypt from 'bcrypt';

const loginService = async (requestPayload: TLoginUser) => {
  const { email, password } = requestPayload;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  return {
    sub: user.id.toString(),
    role: 'user', //hardcoded role for now
  };
};

export default loginService;
