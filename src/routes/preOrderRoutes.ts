import express from 'express';
import validationMiddleware from '../middleware/validationMiddleware.js';
import addPreOrderController from '../controllers/pre-orders/addPreOrderController.js';
import { AddPreOrderSchema } from '../types/pre-orders/addPreOrderSchema.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

// POST
router.post(
  '/add-game',
  validationMiddleware(AddPreOrderSchema),
  addPreOrderController,
);

export default router;
