export type TAddGame = {
  title: string;
  releaseDate: Date;
  maxPreorders: number;
  status: 'UPCOMING' | 'RELEASED';
};
