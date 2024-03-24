import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import useComfyWs from '../hooks/useComfyWs';
import useComfyPrompt from '../hooks/useComfyPrompt';
import useComfyInterrupt from '../hooks/useComfyInterrupt';
import useCkptOptions from '../hooks/useCkptOptions';
import config from '../dungeons/dungeon-character-portrait';
import uuidv4 from '../utils/uuidv4';

const clientId = uuidv4();
const AppContext = createContext({});

const formInitialState = config.formConfig.reduce((acc, { children }) => ({
  ...acc,
  ...children.reduce((acc2, { initialState }) => ({ ...acc2, ...initialState }), {}),
}), {});

export const AppProvider = ({
  children,
}) => {
  const {
    isGenerating,
    progress,
    output,
  } = useComfyWs(clientId);

  const {
    loading: ckptOptionsLoading,
    error: ckptOptionsError,
    ckptNames,
    ckptOptions,
  } = useCkptOptions();

  const comfyUiData = { ckptNames, ckptOptions };

  const [formState, setFormState] = useState(formInitialState);
  const updateFormState = (adjustment) => setFormState({ ...formState, ...adjustment });

  const bodyData = {
    client_id: clientId,
    prompt: config.adapter({ comfyUiData, formState }),
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
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        clientId,

        formState,
        updateFormState,

        isGenerating,
        progress,
        output,

        ckptOptionsLoading,
        ckptOptionsError,
        ckptNames,
        ckptOptions,

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

export const useAppContext = () => useContext(AppContext);
