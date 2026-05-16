import { asyncWrapper } from '../../utils/asyncWrapper.js';
import { addGame } from '../../services/games/addGameService.js';

const addGameController = asyncWrapper(async (req, res) => {
  const newGame = await addGame(req.body);

  res.status(201).json(newGame);
});

export default addGameController;
