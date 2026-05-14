import { z } from 'zod';

// --- Type ---
export type TLoginUser = {
  email: string;
  password: string;
};

// --- Payload Zod Schema ---
export const LoginSchema = z.strictObject({
  email: z.email(),
  password: z.string(),
});
