import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const useAppContext = () => useContext(AppContext);

export default useAppContext;
