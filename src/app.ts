import express from 'express';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Request received for:', req.method, req.path);
  res.send('Hello World');
});

// --- Error handler middleware ---
app.use(errorHandler);
