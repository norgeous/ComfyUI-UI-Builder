import { createContext } from 'react';
import PropTypes from 'prop-types';
import useComfyWs from '../hooks/useComfyWs';
import useClientIdContext from '../hooks/useClientIdContext';

export const WsContext = createContext({
  isGenerating: false,
  progress: 0,
  output: undefined,
});

const WsProvider = ({ children = null }) => {
  const clientId = useClientIdContext();

  const { wsStatus, lastWsMessage, isGenerating, progress, output } =
    useComfyWs(clientId);

  return (
    <WsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        wsStatus,
        lastWsMessage,
        isGenerating,
        progress,
        output,
      }}
    >
      {children}
    </WsContext.Provider>
  );
};

WsProvider.propTypes = {
  children: PropTypes.node,
};

export default WsProvider;
