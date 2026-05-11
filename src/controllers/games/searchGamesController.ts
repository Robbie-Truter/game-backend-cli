import { type Request, type Response, type NextFunction } from 'express';
import searchGames from '../../services/games/searchGamesService.js';

const searchGamesController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const searchedGames = await searchGames(req.query);

    res.status(200).json(searchedGames);
  } catch (error) {
    next(error);
  }
};

export default searchGamesController;
