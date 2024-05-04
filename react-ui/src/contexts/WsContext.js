import { createContext } from 'react';

const WsContext = createContext({
  comfyUrl: undefined,
  isGenerating: false,
  progress: 0,
  output: undefined,
});

export default WsContext;
