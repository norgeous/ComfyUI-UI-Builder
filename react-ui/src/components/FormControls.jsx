import styled from 'styled-components';
import { useContext, useEffect } from 'react';

import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import WsContext from '@/contexts/WsContext';

import Button from './Button/Button';
import ErrorText from './form-fields/ErrorText';

const ButtonsArea = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
`;

const FormControls = () => {
  const { isGenerating } = useContext(WsContext);

  const {
    // formState,
    formState: { positivePrompt, enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const { promptError, executePrompt, executeInterrupt } =
    useContext(AppContext);

  const handleClick = () => {
    if (enableSeedRandomisation) {
      const newSeed = Math.floor(Math.random() * 10 ** 10);
      updateFormState({ seed: newSeed });
    }
    executePrompt();
  };

  // autoprompt hack
  useEffect(() => {
    if (positivePrompt && !isGenerating) executePrompt();
  }, [positivePrompt]);

  return (
    <ButtonsArea>
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
    </ButtonsArea>
  );
};

export default FormControls;
