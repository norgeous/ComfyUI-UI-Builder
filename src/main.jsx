import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle, Theme } from '@/components/globalStyles';
import Providers from '@/Providers';
import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Providers>
      <Theme />
      <App />
    </Providers>
  </StrictMode>,
);
