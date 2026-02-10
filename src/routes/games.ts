import express from 'express';
const router = express.Router();
import addGameController from '../controllers/games/addGameController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddGameSchema } from '../types/games/addGame.js';
import { searchGamesSchema } from '../types/games/searchGamesSchema.js';
import searchGamesController from '../controllers/games/searchGamesController.js';

// POST
router.post(
  '/add-game',
  validationMiddleware(AddGameSchema),
  addGameController,
);

// GET
router.get(
  '/search-games',
  validationMiddleware(searchGamesSchema),
  searchGamesController,
);

export default router;
