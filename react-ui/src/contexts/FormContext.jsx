import { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ConfigsContext } from './ConfigsContext';

export const FormContext = createContext({
  formConfig: [],
  formState: {},
  updateFormState: () => {},
});

const FormProvider = ({ children = null }) => {
  const { config } = useContext(ConfigsContext);

  const [formConfig, setFormConfig] = useState(config.configData.formConfig);
  const [formState, setFormState] = useState(config.formInitialState || {});

  // when config loads or when switching UIs, set the formConfig and formState
  useEffect(() => {
    setFormConfig(config.configData.formConfig);
    setFormState(config.formInitialState || {});
  }, [config]);

  const updateFormState = adjustment => {
    setFormState({
      ...formState,
      ...adjustment,
    });
  };

  return (
    <FormContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ formConfig, formState, updateFormState }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = { children: PropTypes.node };

export default FormProvider;
