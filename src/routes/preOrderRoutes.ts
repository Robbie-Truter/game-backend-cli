import express from 'express';
import validationMiddleware from '../middleware/validationMiddleware.js';
import addPreOrderController from '../controllers/pre-orders/addPreOrderController.js';
import removePreOrderController from '../controllers/pre-orders/removePreOrderController.js';
import { AddPreOrderSchema } from '../types/pre-orders/addPreOrderSchema.js';
import { DeletePreOrderSchema } from '../types/pre-orders/deletePreOrderSchema.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

// POST
router.post(
  '/add-game',
  validationMiddleware(AddPreOrderSchema),
  addPreOrderController,
);

// DELETE
router.delete(
  '/delete-game/:gameId',
  validationMiddleware(DeletePreOrderSchema),
  removePreOrderController,
);

export default router;
