import { createContext, useContext, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import useComfyWs from '../hooks/useComfyWs';
import useComfyPrompt from '../hooks/useComfyPrompt';
import useComfyInterrupt from '../hooks/useComfyInterrupt';
import useCkptOptions from '../hooks/useCkptOptions';
import config from '../dungeons/dungeon-character-portrait';
import uuidv4 from '../utils/uuidv4';

const clientId = uuidv4();
const AppContext = createContext({});

export const AppProvider = ({
  children,
}) => {
  const [opened, { toggle }] = useDisclosure();

  const {
    isGenerating,
    progress,
    output,
  } = useComfyWs(clientId);

  const {
    loading: ckptOptionsLoading,
    error: ckptOptionsError,
    ckptOptions,
  } = useCkptOptions();

  const [ckpt, setCkpt] = useState(''); // TODO: use one state for all formData

  const handleSelectCkpt = (value) => setCkpt(value);

  const formData = {
    ckpt,
    gender: 0,
  };

  const bodyData = {
    prompt: config.adapter(formData),
    client_id: clientId,
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

        opened,
        toggle,

        isGenerating,
        progress,
        output,

        ckptOptionsLoading,
        ckptOptionsError,
        ckptOptions,
        ckpt,
        handleSelectCkpt,

        executePrompt,
        promptLoading,
        promptError,

        executeInterrupt,
        interruptLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
