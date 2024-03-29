import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useConfig from '../hooks/useConfig';
import useComfyWs from '../hooks/useComfyWs';
import useComfyPrompt from '../hooks/useComfyPrompt';
import useComfyInterrupt from '../hooks/useComfyInterrupt';
import useCkptOptions from '../hooks/useCkptOptions';
import useObjectInfo from '../hooks/useObjectInfo';
import uuidv4 from '../utils/uuidv4';
import comfyWorkflowToComfyPrompt from '../utils/comfyWorkflowToComfyPrompt';

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
    isGenerating,
    progress,
    output,
  } = useComfyWs(clientId);

  const { objectInfo } = useObjectInfo();
  // console.log(objectInfo)

  const {
    loading: ckptOptionsLoading,
    error: ckptOptionsError,
    ckptNames,
    ckptOptions,
  } = useCkptOptions();


  const formInitialState = config.formConfig.reduce((acc, { children }) => ({
    ...acc,
    ...children.reduce((acc2, { initialState, initialOptionIndex, options }) => {
      // eslint-disable-next-line no-unused-vars
      const { label, ...optionFragment } = options?.[initialOptionIndex] || {};
      return ({
        ...acc2,
        ...initialState,
        ...optionFragment,
      });
    }, {}),
  }), {});

  const [formState, setFormState] = useState(formInitialState);
  const updateFormState = (adjustment) => setFormState({
    ...formState,
    ...adjustment,
  });

  const comfyUiData = { ckptNames, objectInfo };

  const bodyData = {
    client_id: clientId,
    // prompt: comfyWorkflowToComfyPrompt({
    //   comfyWorkflow: config.adapter({
    //     comfyUiData,
    //     formState,
    //   }),
    //   objectInfo,
    // }),
  };

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
