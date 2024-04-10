import { useContext } from 'react';
import { ClientIdContext } from '../contexts/ClientIdContext';

const useClientIdContext = () => useContext(ClientIdContext);

export default useClientIdContext;
