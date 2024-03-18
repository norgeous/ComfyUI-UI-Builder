import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@mantine/core/styles.css';
import './index.css';
import { AppProvider } from './contexts/AppContext';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
  colorScheme: 'dark',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} forceColorScheme="dark" withGlobalStyles withNormalizeCSS>
      <AppProvider>
        <App />
      </AppProvider>
    </MantineProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
