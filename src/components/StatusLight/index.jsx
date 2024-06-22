import { useContext } from 'react';
import WsContext from '@/contexts/WsContext';
import { Light } from './styled';

const emojis = {
  DEFAULT: '⚫',
  CONNECTING: '🔵',
  CONNECTED: '🟢',
  DISCONNECTED: '🔴',
};

const StatusLight = () => {
  const { wsStatus } = useContext(WsContext);
  return <Light>{emojis[wsStatus]}</Light>;
};

export default StatusLight;
