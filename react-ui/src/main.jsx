import React from 'react';
import ReactDOM from 'react-dom/client';

import Pyramid from './components/Pyramid';

import ClientIdProvider from './contexts/ClientIdProvider';
import ConfigsProvider from './contexts/ConfigsProvider';
import FormProvider from './contexts/FormProvider';
import ObjectInfoProvider from './contexts/ObjectInfoProvider';
import WsProvider from './contexts/WsProvider';
import AppProvider from './contexts/AppProvider';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pyramid>
      <ConfigsProvider />
      <ClientIdProvider />
      <WsProvider />
      <ObjectInfoProvider />
      <FormProvider />
      <AppProvider />
      <App />
    </Pyramid>
  </React.StrictMode>,
);
