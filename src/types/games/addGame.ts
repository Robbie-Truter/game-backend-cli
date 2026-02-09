import { z } from 'zod';

export const gameStatuses = ['UPCOMING', 'RELEASED'] as const;

// --- Type ---
export type TAddGame = {
  title: string;
  releaseDate: Date;
  maxPreorders: number;
  status: (typeof gameStatuses)[number];
};

// --- Payload ---
export const AddGameSchema = z.strictObject({
  title: z.string(),
  releaseDate: z.coerce.date(),
  maxPreorders: z.number(),
  status: z.enum(gameStatuses),
});
