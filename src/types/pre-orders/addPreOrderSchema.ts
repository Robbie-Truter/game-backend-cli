import { z } from 'zod';

// --- Type ---
export type TAddPreOrder = {
  gameId: number;
  userId: number;
};

// --- Payload ZOD Schema ---
export const AddPreOrderSchema = z.strictObject({
  gameId: z.coerce.number().int().positive(),
});
