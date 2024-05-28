import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle, Theme1Style } from './components/globalStyles';
import Providers from './Providers';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Theme1Style />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
