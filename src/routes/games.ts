import express from 'express';
const router = express.Router();
import addGameController from '../controllers/games/addGameController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddGameSchema } from '../types/games/addGame.js';

// POST
router.post(
  '/add-game',
  validationMiddleware(AddGameSchema),
  addGameController,
);

// GET
//router.get('/find-game');

export default router;
