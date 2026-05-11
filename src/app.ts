import express from 'express';
import gameRouter from './routes/gameRoutes.js';
import authRouter from './routes/authRoutes.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { notFoundMiddleware } from './middleware/notFoundMiddleware.js';

const app = express();

app.use(express.json());

// --- Routes ---
app.use('/game', gameRouter);
app.use('/auth', authRouter);

// --- Custom Middleware ---
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
