import { useContext } from 'react';
import { WsContext } from '../contexts/WsContext';

const emojis = {
  DEFAULT: '⚫',
  CONNECTING: '🔵',
  CONNECTED: '🟢',
  DISCONNECTED: '🔴',
};

const StatusLight = () => {
  const { wsStatus } = useContext(WsContext);
  return emojis[wsStatus];
};

export default StatusLight;
