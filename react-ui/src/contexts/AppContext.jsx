import { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import useConfig from '../hooks/useConfig';
import useComfyWs from '../hooks/useComfyWs';
import useComfyPrompt from '../hooks/useComfyPrompt';
import useComfyInterrupt from '../hooks/useComfyInterrupt';
import useObjectInfo from '../hooks/useObjectInfo';
import useBodyData from '../hooks/useBodyData';

import uuidv4 from '../utils/uuidv4';
import getFormInitialState from '../utils/getFormInitialState';

const clientId = uuidv4();

export const AppContext = createContext({});

const AppProvider = ({
  children,
}) => {
  const {
    config,
    configs,
    setConfig,
  } = useConfig();

  const {
    configData: {
      formConfig,
      adapterConfig,
    },
    baseWorkflow,
  } = config;

  const { objectInfo } = useObjectInfo();

  const formInitialState = useMemo(() => getFormInitialState(formConfig), [formConfig]);
  const [formState, setFormState] = useState(formInitialState);
  useEffect(() => setFormState(formInitialState), [formInitialState]); // when switching UIs, reset formState to default
  const updateFormState = (adjustment) => setFormState({
    ...formState,
    ...adjustment,
  });

  const comfyUiData = { objectInfo };

  const { adaptedComfyWorkflow, bodyData } = useBodyData({ clientId, comfyUiData, formState, baseWorkflow, adapterConfig });

  const {
    isGenerating,
    progress,
    output,
  } = useComfyWs(clientId);

  const {
    executeFetch: executePrompt,
    loading: promptLoading,
    error: promptError,
    // data: promptData,
  } = useComfyPrompt({ bodyData });

  const {
    executeFetch: executeInterrupt,
    loading: interruptLoading,
    // error: interruptError,
  } = useComfyInterrupt();

  return (
    <AppContext.Provider
      value={{
        clientId,

        config,
        configs,
        setConfig,

        formConfig,
        formState,
        updateFormState,

        isGenerating,
        progress,
        output,

        objectInfo,

        executePrompt,
        promptLoading,
        promptError,

        executeInterrupt,
        interruptLoading,

        baseWorkflow,
        adaptedComfyWorkflow,
        bodyData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
