import { z } from 'zod';

// --- Type ---
export type TDeletePreOrder = {
  gameId: number;
  userId: number;
};

// --- Payload ZOD Schema ---
export const DeletePreOrderSchema = z.strictObject({
  gameId: z.coerce.number().int().positive(),
});
