import { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ConfigsContext } from './ConfigsContext';
import getFormInitialState from '../utils/getFormInitialState';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const { config } = useContext(ConfigsContext);
  const { formConfig } = config.configData || {};
  const [formState, setFormState] = useState({});

  // when switching UIs, reset formState to default
  useEffect(() => {
    const formInitialState = getFormInitialState(formConfig);
    setFormState(formInitialState);
  }, [formConfig]);

  const updateFormState = adjustment =>
    setFormState({
      ...formState,
      ...adjustment,
    });

  return (
    <FormContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        formConfig,
        formState,
        updateFormState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.defaultProps = { children: null };

FormProvider.propTypes = { children: PropTypes.node };

export default FormProvider;
