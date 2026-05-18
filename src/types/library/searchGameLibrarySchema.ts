import { z } from 'zod';

export const gameStatuses = ['UPCOMING', 'RELEASED'] as const;

// --- Type ---
export type TSearchGameLibrary = {
  title?: string;
  releaseDate?: Date;
  status?: 'UPCOMING' | 'RELEASED';
};

// --- Payload ---
export const SearchGameLibrarySchema = z.strictObject({
  title: z.string().optional(),
  releaseDate: z.coerce.date().optional(),
  status: z.enum(gameStatuses).optional(),
});
