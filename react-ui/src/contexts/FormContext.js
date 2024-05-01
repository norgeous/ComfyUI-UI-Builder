import { createContext } from 'react';

const FormContext = createContext({
  formConfig: [],
  formState: {},
  updateFormState: () => {},
});

export default FormContext;
