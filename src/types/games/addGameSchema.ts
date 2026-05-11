import { z } from 'zod';

export const gameStatuses = ['UPCOMING', 'RELEASED'] as const;

// --- Type ---
export type TAddGame = {
  title: string;
  releaseDate: Date;
  maxPreorders: number;
  status: 'UPCOMING' | 'RELEASED';
};

// --- Payload ZOD Schema ---
export const AddGameSchema = z.strictObject({
  title: z.string().trim().min(1, 'Game title cannot be empty'),
  releaseDate: z.coerce.date(),
  maxPreorders: z.number().int().positive(),
  status: z.enum(gameStatuses),
});
