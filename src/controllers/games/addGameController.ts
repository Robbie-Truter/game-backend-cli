import { type Request, type Response, type NextFunction } from 'express';
import { addGame } from '../../services/games/addGame.js';
import type { TAddGame } from '../../types/games/addGame.js';

const validateGamePayload = (payload: TAddGame) => {
  const { title, releaseDate, maxPreorders, status } = payload;

  if (!title) {
    return { isValid: false, msg: 'Title field is required' };
  }
  if (!releaseDate) {
    return { isValid: false, msg: 'Release date field is required' };
  }
  if (!maxPreorders) {
    return { isValid: false, msg: 'Max pre-orders field is required' };
  }
  if (!status) {
    return { isValid: false, msg: 'Status field is required' };
  }

  return { isValid: true, msg: 'Success' };
};

const addGameController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatePayload = validateGamePayload(req.body);

    if (!validatePayload.isValid) {
      res.status(400).json({ error: validatePayload.msg });
    }

    const newGame = await addGame(req.body);

    res.status(201).json(newGame);
  } catch (error) {
    next(error);
  }
};

export default addGameController;
