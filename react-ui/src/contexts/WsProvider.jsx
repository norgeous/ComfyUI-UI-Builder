import { useContext } from 'react';
import PropTypes from 'prop-types';
import ClientIdContext from '@/contexts/ClientIdContext';
import WsContext from './WsContext';
import useComfyWs from '../hooks/useComfyWs';

const WsProvider = ({ children = null }) => {
  const clientId = useContext(ClientIdContext);

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
