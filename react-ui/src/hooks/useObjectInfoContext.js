import { useContext } from 'react';
import { ObjectInfoContext } from '../contexts/ObjectInfoContext';

const useObjectInfoContext = () => useContext(ObjectInfoContext);

export default useObjectInfoContext;
