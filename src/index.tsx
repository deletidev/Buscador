import { createRoot } from 'react-dom/client';

import './styles.css';

import { App } from './app';

const rootElement = document.getElementById('root');

if (rootElement && rootElement instanceof HTMLDivElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  throw new Error('Root element not found');
}
