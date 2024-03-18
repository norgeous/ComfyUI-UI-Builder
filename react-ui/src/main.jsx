import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core';
import { AppProvider } from './contexts/AppContext';
import App from './App.jsx'

import '@mantine/core/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
  colorScheme: 'dark',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} forceColorScheme="dark" withGlobalStyles withNormalizeCSS>
      <AppProvider>
        <App />
      </AppProvider>
    </MantineProvider>
  </React.StrictMode>,
);
