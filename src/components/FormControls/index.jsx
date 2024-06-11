import { useContext, useEffect, useState } from 'react';
import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import WsContext from '@/contexts/WsContext';
import Button from '@/components/Button';
import ErrorText from '@/components/ErrorText';
import {
  SpinnerIcon,
  InterruptIcon,
  PauseIcon,
  PlayIcon,
} from '@/components/Icons';
import Tooltip from '@/components/Tooltip';
import { ButtonsArea, Container, QueueTitle } from './styled';

const FormControls = () => {
  const { isGenerating } = useContext(WsContext);
  const [auto, setAuto] = useState(false);

  const {
    formState: { positivePrompt, enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const {
    executePrompt,
    promptLoading,
    promptError,
    executeInterrupt,
    interruptLoading,
  } = useContext(AppContext);

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
    <Container>
      {isGenerating && (
        <ButtonsArea>
          <SpinnerIcon />
          <QueueTitle>Job 1 (running...)</QueueTitle>
          <Tooltip text="Interrupt Job 1">
            <Button onClick={executeInterrupt}>
              {interruptLoading ? <SpinnerIcon /> : <InterruptIcon />}
            </Button>
          </Tooltip>
        </ButtonsArea>
      )}
      {promptError && <ErrorText>{promptError}</ErrorText>}
      <ButtonsArea>
        {!auto && (
          <Button wide onClick={handleClick}>
            {promptLoading ? <SpinnerIcon /> : 'Generate'}
          </Button>
        )}
        <Tooltip
          text="Automatic Generation (on change to Positive Prompt when the queue is empty)"
          wide={auto}
        >
          <Button
            aria-label="Automatic Generation"
            onClick={() => setAuto(!auto)}
            wide={auto}
          >
            {auto ? <PauseIcon /> : <PlayIcon />}
          </Button>
        </Tooltip>
      </ButtonsArea>
    </Container>
  );
};

export default FormControls;
