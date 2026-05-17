import { z } from 'zod';

// --- Type ---
export type TRegister = {
  username: string;
  email: string;
  passwordHash: string;
};

// --- Payload ---
export const RegisterSchema = z.strictObject({
  username: z.string(),
  email: z.email(),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});
