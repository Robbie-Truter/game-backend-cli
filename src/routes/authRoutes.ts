import express from 'express';
const router = express.Router();
import addGameController from '../controllers/games/addGameController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddGameSchema } from '../types/games/addGameSchema.js';
import { searchGamesSchema } from '../types/games/searchGamesSchema.js';
import searchGamesController from '../controllers/games/searchGamesController.js';
import { AddUserSchema } from '../types/users/addUserSchema.js';
import addUserController from '../controllers/users/addUserController.js';

// POST
router.post('/login', validationMiddleware(AddGameSchema), addGameController);

router.post(
  '/register',
  validationMiddleware(AddUserSchema),
  addUserController,
);

// GET
router.get(
  '/refresh',
  validationMiddleware(searchGamesSchema),
  searchGamesController,
);

export default router;
