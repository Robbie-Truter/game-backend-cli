import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddGameLibrarySchema } from '../types/library/addGameLibrarySchema.js';
import addGameLibraryController from '../controllers/library/addGameLibraryController.js';
import searchGameLibraryController from '../controllers/library/searchGameLibraryController.js';
import removeGameLibraryController from '../controllers/library/removeGameLibraryController.js';
import { SearchGameLibrarySchema } from '../types/library/searchGameLibrarySchema.js';
import { DeleteGameLibrarySchema } from '../types/library/deleteGameLibrarySchema.js';

const router = express.Router();

// Authentication middleware
router.use(authMiddleware);

// POST
router.post(
  '/add-game-library',
  validationMiddleware(AddGameLibrarySchema),
  addGameLibraryController,
);

// GET
router.get(
  '/search-game-library',
  validationMiddleware(SearchGameLibrarySchema),
  searchGameLibraryController,
);

// DELETE
router.delete(
  '/delete-game-library/:gameId',
  validationMiddleware(DeleteGameLibrarySchema),
  removeGameLibraryController,
);

export default router;
