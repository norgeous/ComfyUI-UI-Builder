import React from 'react';
import ReactDOM from 'react-dom/client';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import Pyramid from './components/Pyramid';
import AppProvider from './contexts/AppContext';
import App from './App';

import 'uikit/dist/css/uikit.min.css';
import './index.css';

UIkit.use(Icons);
window.UIkit = UIkit;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pyramid>
      <AppProvider />
      <App />
    </Pyramid>
  </React.StrictMode>,
);
