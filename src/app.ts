import express from 'express';
import gameRouter from './routes/games.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { notFoundMiddleware } from './middleware/notFoundMiddleware.js';

const app = express();

app.use(express.json());

// --- Routes ---
app.use('/game', gameRouter);

// --- Custom Middleware ---
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
