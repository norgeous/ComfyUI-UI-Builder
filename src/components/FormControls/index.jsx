import { useContext, useEffect, useState } from 'react';
import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import WsContext from '@/contexts/WsContext';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import ErrorText from '@/components/ErrorText';
import Tooltip from '@/components/Tooltip';
import { SpinnerIcon, PauseIcon, PlayIcon } from '@/components/Icons';

const FormControls = () => {
  const { isGenerating } = useContext(WsContext);
  const [auto, setAuto] = useState(false);

  const {
    formState: { positivePrompt, enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const { executePrompt, promptLoading, promptError } = useContext(AppContext);

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
    <Layout column>
      {promptError && <ErrorText>{promptError}</ErrorText>}
      <Layout>
        {!auto && (
          <Button wide onClick={handleClick}>
            {promptLoading ? <SpinnerIcon /> : 'Generate'}
          </Button>
        )}
        <Tooltip text="Automatic Generation" wide={auto}>
          <Button
            variant="secondary"
            aria-label="Automatic Generation"
            onClick={() => setAuto(!auto)}
            wide={auto}
          >
            {auto ? <PauseIcon /> : <PlayIcon />}
          </Button>
        </Tooltip>
      </Layout>
    </Layout>
  );
};

export default FormControls;
