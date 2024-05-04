import { useContext } from 'react';
import PropTypes from 'prop-types';
import ClientIdContext from '@/contexts/ClientIdContext';
import useComfyWs from '@/hooks/useComfyWs';
import WsContext from './WsContext';

const WsProvider = ({ children = null }) => {
  const clientId = useContext(ClientIdContext);
  const value = useComfyWs(clientId);
  return <WsContext.Provider value={value}>{children}</WsContext.Provider>;
};

WsProvider.propTypes = {
  children: PropTypes.node,
};

export default WsProvider;
