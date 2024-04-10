import { useContext } from 'react';
import { WsContext } from '../contexts/WsContext';

const useWsContext = () => useContext(WsContext);

export default useWsContext;
