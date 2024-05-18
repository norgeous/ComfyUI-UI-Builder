import { useContext } from 'react';

import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import WsContext from '@/contexts/WsContext';

import Button from './Button/Button';
import ErrorText from './form-fields/ErrorText';

const FormControls = () => {
  const { isGenerating } = useContext(WsContext);

  const {
    formState: { enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const { promptError, executePrompt, executeInterrupt } =
    useContext(AppContext);

  const handleClick = () => {
    executePrompt();
    if (enableSeedRandomisation) {
      const newSeed = Math.floor(Math.random() * 10 ** 10);
      updateFormState({ seed: newSeed });
    }
  };

  return (
    <div>
      {promptError && <ErrorText>{promptError}</ErrorText>}
      <Button
        onClick={handleClick}
        // loading={promptLoading || isGenerating}
      >
        Generate
      </Button>
      {isGenerating && (
        <Button
          onClick={executeInterrupt}
          // loading={interruptLoading}
        >
          Interrupt
        </Button>
      )}
    </div>
  );
};

export default FormControls;
