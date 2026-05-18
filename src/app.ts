import express from 'express';
import cookieParser from 'cookie-parser';
import gameRouter from './routes/gameRoutes.js';
import authRouter from './routes/authRoutes.js';
import libraryRouter from './routes/libraryRoutes.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { notFoundMiddleware } from './middleware/notFoundMiddleware.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

// --- Routes ---
app.use('/game', gameRouter);
app.use('/auth', authRouter);
app.use('/library', libraryRouter);

// --- Custom Middleware ---
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
