import { type Request, type Response } from 'express';
import searchGames from '../../services/games/searchGamesService.js';
import { asyncWrapper } from '../../utils/asyncWrapper.js';

const searchGamesController = asyncWrapper(
  async (req: Request, res: Response) => {
    const searchedGames = await searchGames(req.query);

    res.status(200).json(searchedGames);
  },
);

export default searchGamesController;
