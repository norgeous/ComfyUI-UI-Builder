import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';

import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import WsContext from '@/contexts/WsContext';

import Button from './Button/Button';
import ErrorText from './form-fields/ErrorText';
import InputCheckbox from './form-fields/InputCheckbox/InputCheckbox';

const ButtonsArea = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
`;

const FormControls = () => {
  const { isGenerating } = useContext(WsContext);
  const [auto, setAuto] = useState(false);

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

  // autoprompting
  useEffect(() => {
    if (auto && positivePrompt && !isGenerating) executePrompt();
  }, [auto, positivePrompt]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <InputCheckbox
        label="Auto Gen"
        info="Generate after change to positive prompt"
        options={[
          { label: 'on', value: false },
          { label: 'on', value: true },
        ]}
        defaultValueIndex={0}
        value={auto}
        onChange={setAuto}
      />
    </ButtonsArea>
  );
};

export default FormControls;
