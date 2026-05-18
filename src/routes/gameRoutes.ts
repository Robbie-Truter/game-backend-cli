import express from 'express';
import addGameController from '../controllers/games/addGameController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddGameSchema } from '../types/games/addGameSchema.js';
import { searchGamesSchema } from '../types/games/searchGamesSchema.js';
import { deleteGameSchema } from '../types/games/deleteGameSchema.js';
import searchGamesController from '../controllers/games/searchGamesController.js';
import deleteGameController from '../controllers/games/deleteGameController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminOnlyMiddleware } from '../middleware/adminOnlyMiddleware.js';

const router = express.Router();

// Authentication middleware
router.use(authMiddleware);

// POST
router.post(
  '/add-game',
  adminOnlyMiddleware,
  validationMiddleware(AddGameSchema),
  addGameController,
);

// GET
router.get(
  '/search-games',
  validationMiddleware(searchGamesSchema),
  searchGamesController,
);

// DELETE
router.delete(
  '/delete-game/:id',
  adminOnlyMiddleware,
  validationMiddleware(deleteGameSchema),
  deleteGameController,
);

export default router;
