import express from 'express';
import userRouter from './routes/user.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { notFoundMiddleware } from './middleware/notFoundMiddleware.js';

const app = express();

app.use(express.json());

app.use('/api', userRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
