import express from 'express';
import config from './config/config.js';

const app = express();
const { port } = config;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
