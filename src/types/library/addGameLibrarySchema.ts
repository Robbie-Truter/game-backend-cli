import { z } from 'zod';

export type TAddGameLibrary = z.infer<typeof AddGameLibrarySchema>;

export const AddGameLibrarySchema = z.strictObject({
  gameId: z.number().int().positive('Invalid game ID'),
});
