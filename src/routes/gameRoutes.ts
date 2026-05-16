import express from 'express';
import addGameController from '../controllers/games/addGameController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddGameSchema } from '../types/games/addGameSchema.js';
import { searchGamesSchema } from '../types/games/searchGamesSchema.js';
import { deleteGameSchema } from '../types/games/deleteGameSchema.js';
import searchGamesController from '../controllers/games/searchGamesController.js';
import deleteGameController from '../controllers/games/deleteGameController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST
router.post(
  '/add-game',
  authMiddleware,
  validationMiddleware(AddGameSchema),
  addGameController,
);

// GET
router.get(
  '/search-games',
  authMiddleware,
  validationMiddleware(searchGamesSchema),
  searchGamesController,
);

// DELETE
router.delete(
  '/delete-game/:id',
  authMiddleware,
  validationMiddleware(deleteGameSchema),
  deleteGameController,
);

export default router;
