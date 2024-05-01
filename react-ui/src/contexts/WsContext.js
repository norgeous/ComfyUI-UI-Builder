import { createContext } from 'react';

const WsContext = createContext({
  isGenerating: false,
  progress: 0,
  output: undefined,
});

export default WsContext;
