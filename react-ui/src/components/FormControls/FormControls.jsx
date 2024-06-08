import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import WsContext from '@/contexts/WsContext';

import { FaPause, FaPlay } from 'react-icons/fa6';
import Button from '../Button/Button';
import ErrorText from '../form-fields/ErrorText';
import Tooltip from '../Tooltip';

const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonsArea = styled.div`
  display: flex;
  gap: 8px;
`;

const PlayIcon = styled(FaPlay)`
  display: block;
  font-size: 15.3333px;
`;

const PauseIcon = styled(FaPause)`
  display: block;
  font-size: 15.3333px;
`;

const FormControls = () => {
  const { isGenerating } = useContext(WsContext);
  const [auto, setAuto] = useState(false);

  const {
    formState: { positivePrompt, enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const { executePrompt, promptLoading, promptError, executeInterrupt } =
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
    <Container>
      {isGenerating && !auto && (
        <Button
          onClick={executeInterrupt}
          // loading={interruptLoading}
        >
          Interrupt Job 1
        </Button>
      )}
      {promptError && <ErrorText>{promptError}</ErrorText>}
      <ButtonsArea>
        {!auto && (
          <Button
            wide
            onClick={handleClick}
            loading={promptLoading || isGenerating}
          >
            Generate
          </Button>
        )}
        <Tooltip text="Automatic Generation" wide={auto}>
          <Button onClick={() => setAuto(!auto)} wide={auto}>
            {auto ? <PauseIcon /> : <PlayIcon />}
          </Button>
        </Tooltip>
      </ButtonsArea>
    </Container>
  );
};

export default FormControls;
