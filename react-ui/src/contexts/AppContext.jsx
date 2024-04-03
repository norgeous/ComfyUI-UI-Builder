import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import useConfig from '../hooks/useConfig';
import useComfyWs from '../hooks/useComfyWs';
import useComfyPrompt from '../hooks/useComfyPrompt';
import useComfyInterrupt from '../hooks/useComfyInterrupt';
import useCkptOptions from '../hooks/useCkptOptions';
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

  const {
    loading: ckptOptionsLoading,
    error: ckptOptionsError,
    ckptNames,
    ckptOptions,
  } = useCkptOptions();

  const formInitialState = getFormInitialState(formConfig);
  const [formState, setFormState] = useState(formInitialState);
  const updateFormState = (adjustment) => setFormState({
    ...formState,
    ...adjustment,
  });

  const comfyUiData = { ckptNames, objectInfo };

  const bodyData = useBodyData({ clientId, comfyUiData, formState, baseWorkflow, adapterConfig });

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

        ckptOptionsLoading,
        ckptOptionsError,
        ckptNames,
        ckptOptions,

        objectInfo,

        executePrompt,
        promptLoading,
        promptError,

        executeInterrupt,
        interruptLoading,

        baseWorkflow,
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
