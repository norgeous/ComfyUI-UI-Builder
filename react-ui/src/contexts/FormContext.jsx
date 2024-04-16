import { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useConfigsContext from '../hooks/useConfigsContext';
import getFormInitialState from '../utils/getFormInitialState';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const { config } = useConfigsContext();
  const { formConfig } = config.configData || {};

  const formInitialState = useMemo(
    () => getFormInitialState(formConfig),
    [formConfig],
  );

  const [formState, setFormState] = useState(formInitialState);

  // when switching UIs, reset formState to default
  useEffect(() => setFormState(formInitialState), [formInitialState]);

  const updateFormState = adjustment =>
    setFormState({
      ...formState,
      ...adjustment,
    });

  console.log({ formConfig, formInitialState, formState });

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
