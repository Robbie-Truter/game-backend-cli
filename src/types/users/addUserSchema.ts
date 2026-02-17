import { z } from 'zod';

// --- Type ---
export type TAddUser = {
  username: string;
  email: string;
  passwordHash: string;
};

// --- Payload ---
export const AddUserSchema = z.strictObject({
  username: z.string(),
  email: z.email(),
  passwordHash: z.string(),
});
