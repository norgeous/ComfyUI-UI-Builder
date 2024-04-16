import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import useClientIdContext from '../hooks/useClientIdContext';
import useConfigsContext from '../hooks/useConfigsContext';
import useFormContext from '../hooks/useFormContext';
import { ObjectInfoContext } from './ObjectInfoContext';

import useComfyPrompt from '../hooks/useComfyPrompt';
import useComfyInterrupt from '../hooks/useComfyInterrupt';
import useBodyData from '../hooks/useBodyData';

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const clientId = useClientIdContext();
  const { config } = useConfigsContext();
  const { baseWorkflow } = config;
  const { adapterConfig } = config.configData || {};
  const { formState } = useFormContext();
  const { objectInfo } = useContext(ObjectInfoContext);

  const comfyUiData = { objectInfo };

  const { adaptedComfyWorkflow, bodyData } = useBodyData({
    clientId,
    comfyUiData,
    formState,
    baseWorkflow,
    adapterConfig,
  });

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
        executePrompt,
        promptLoading,
        promptError,

        executeInterrupt,
        interruptLoading,

        adaptedComfyWorkflow,
        bodyData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.defaultProps = {
  children: null,
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
