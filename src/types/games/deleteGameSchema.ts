import { z } from 'zod';

// --- Payload ZOD Schema ---
export const deleteGameSchema = z.strictObject({
  id: z.coerce.number().int().positive(),
});
