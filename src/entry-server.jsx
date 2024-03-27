import { renderToPipeableStream } from 'react-dom/server';

import App from './app';

export const render = (res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    },
    bootstrapModules: ['/src/entry-client.jsx'],
  });
};
