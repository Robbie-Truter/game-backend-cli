import express from 'express';
import validationMiddleware from '../middleware/validationMiddleware.js';
import { AddUserSchema } from '../types/users/addUserSchema.js';
import { LoginSchema } from '../types/auth/loginSchema.js';
import registerController from '../controllers/auth/registerController.js';
import refreshTokenController from '../controllers/auth/refreshTokenController.js';
import loginController from '../controllers/auth/loginController.js';

const router = express.Router();

// POST
router.post('/login', validationMiddleware(LoginSchema), loginController);
router.post(
  '/register',
  validationMiddleware(AddUserSchema),
  registerController,
);

// GET
router.get('/refresh', refreshTokenController);

export default router;
