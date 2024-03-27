import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';

const app = express();

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res) => {
  const url = req.originalUrl;

  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

  render(res);
});

app.listen(4173, () => {
  console.log('http://localhost:4173.');
});
