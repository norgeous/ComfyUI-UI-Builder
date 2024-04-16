import { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ConfigsContext } from './ConfigsContext';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const { config } = useContext(ConfigsContext);
  const [formState, setFormState] = useState(config.formInitialState || {});

  // when switching UIs, reset formState to initial
  useEffect(() => {
    setFormState(config.formInitialState || {});
  }, [config.formInitialState]);

  const updateFormState = adjustment =>
    setFormState({
      ...formState,
      ...adjustment,
    });

  return (
    <FormContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
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
