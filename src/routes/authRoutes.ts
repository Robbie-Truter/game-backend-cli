import express from 'express';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { RegisterSchema } from '../types/auth/registerSchema.js';
import { LoginSchema } from '../types/auth/loginSchema.js';
import registerController from '../controllers/auth/registerController.js';
import refreshTokenController from '../controllers/auth/refreshTokenController.js';
import loginController from '../controllers/auth/loginController.js';

const router = express.Router();

// POST
router.post('/login', validationMiddleware(LoginSchema), loginController);
router.post(
  '/register',
  validationMiddleware(RegisterSchema),
  registerController,
);

// GET
router.get('/refresh', refreshTokenController);

export default router;
