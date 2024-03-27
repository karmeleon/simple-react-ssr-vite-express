import { hydrateRoot } from 'react-dom/client';

import App from './app';

console.log('sup');

hydrateRoot(document.getElementByTagName('html')[0], <App />);
