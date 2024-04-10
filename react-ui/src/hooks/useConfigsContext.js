import { useContext } from 'react';
import { ConfigsContext } from '../contexts/ConfigsContext';

const useConfigsContext = () => useContext(ConfigsContext);

export default useConfigsContext;
