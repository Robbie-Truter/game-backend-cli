import express from 'express';
import { createUserController } from '../controllers/userController.js';
import { type Request, type Response } from 'express';

const router = express.Router();

// GET
router.get('/', (req: Request, res: Response) => {
  res.send('Test GET');
});

// POST
router.post('/add-user', createUserController);

export default router;
