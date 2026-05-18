import { z } from 'zod';

// --- Payload ZOD Schema ---
export const DeleteGameLibrarySchema = z.strictObject({
  gameId: z.coerce.number().int().positive(),
});
