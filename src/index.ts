import express from 'express';
import cors from 'cors';

import connection from './database.js';
import { port } from './env.js';

const app = express();

app.use(
  cors({
    origin: '*', // aqui deveria estar o link do front-end
    optionsSuccessStatus: 200
  })
);

app.get('/', (_, res) => {
  res.send('Hello world!');
});

app.get('api/echo/:text', (req, res) => {
  res.send(req.params.text);
});

app.get('/api/frutas', (_, res) => {
  connection.query('SELECT * FROM frutas').then(([rows]) => {
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
