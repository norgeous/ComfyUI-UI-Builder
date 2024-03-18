import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './contexts/AppContext';
import App from './App'

import 'uikit/dist/css/uikit.min.css';
import './index.css';
import './dungeon.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
