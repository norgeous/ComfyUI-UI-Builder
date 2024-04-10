import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

const useFormContext = () => useContext(FormContext);

export default useFormContext;
