import express from 'express';
import addGameController from '../controllers/games/addGameController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddGameSchema } from '../types/games/addGameSchema.js';
import { searchGamesSchema } from '../types/games/searchGamesSchema.js';
import { AddUserSchema } from '../types/users/addUserSchema.js';
import registerController from '../controllers/auth/registerController.js';
import refreshTokenController from '../controllers/auth/refreshTokenController.js';

const router = express.Router();

// POST
router.post('/login', validationMiddleware(AddGameSchema), addGameController); // TODO: implement login

router.post(
  '/register',
  validationMiddleware(AddUserSchema),
  registerController,
);

// GET
router.get(
  '/refresh',
  validationMiddleware(searchGamesSchema),
  refreshTokenController,
);

export default router;
