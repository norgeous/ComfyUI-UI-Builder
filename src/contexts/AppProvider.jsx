import { useContext } from 'react';
import PropTypes from 'prop-types';

import ConfigsContext from '@/contexts/ConfigsContext';
import FormContext from '@/contexts/FormContext';
import ObjectInfoContext from '@/contexts/ObjectInfoContext';
import AppContext from '@/contexts/AppContext';
import ClientIdContext from '@/contexts/ClientIdContext';

import useComfyPrompt from '@/hooks/useComfyPrompt';
import useComfyInterrupt from '@/hooks/useComfyInterrupt';
import useBodyData from '@/hooks/useBodyData';

const AppProvider = ({ children = null }) => {
  const clientId = useContext(ClientIdContext);
  const { config } = useContext(ConfigsContext);
  const { baseWorkflow } = config;
  const { adapterConfig } = config.configData || {};
  const { formState } = useContext(FormContext);
  const { objectInfo } = useContext(ObjectInfoContext);

  const comfyUiData = { objectInfo };

  const { adapted, adaptedComfyWorkflow, bodyData } = useBodyData({
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
    error: interruptError,
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
        interruptError,

        adapted,
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
