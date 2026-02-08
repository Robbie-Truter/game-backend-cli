import express from 'express';
const router = express.Router();
import addGameController from '../controllers/games/addGameController.js';

// POST
router.post('/add-game', addGameController);

export default router;
