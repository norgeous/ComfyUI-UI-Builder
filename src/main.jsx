import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/components/globalStyles';
import Providers from '@/Providers';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
