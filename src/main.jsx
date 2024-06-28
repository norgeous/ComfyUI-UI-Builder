import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Providers from '@/Providers';
import App from '@/components/App';
import { GlobalStyle, Theme } from '@/components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Providers>
      <Theme />
      <App />
    </Providers>
  </StrictMode>,
);
