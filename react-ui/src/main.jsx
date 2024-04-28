import React from 'react';
import ReactDOM from 'react-dom/client';

import Pyramid from './components/Pyramid';

import ClientIdProvider from './contexts/ClientIdContext';
import ConfigsProvider from './contexts/ConfigsContext';
import FormProvider from './contexts/FormContext';
import ObjectInfoProvider from './contexts/ObjectInfoContext';
import WsProvider from './contexts/WsContext';
import AppProvider from './contexts/AppContext';

import App from './App';

import 'uikit/dist/css/uikit.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pyramid>
      <ClientIdProvider />
      <ConfigsProvider />
      <ObjectInfoProvider />
      <FormProvider />
      <WsProvider />
      <AppProvider />
      <App />
    </Pyramid>
  </React.StrictMode>,
);
