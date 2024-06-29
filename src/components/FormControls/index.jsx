import { useContext, useState } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/ComfyBridgeContext';
import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import ErrorText from '@/components/ErrorText';
import Tooltip from '@/components/Tooltip';
import { SpinnerIcon, PauseIcon, PlayIcon } from '@/components/Icons';

const FormControls = () => {
  const { bridge, data } = useContext(ComfyBridgeContext);

  const [auto, setAuto] = useState(false);

  const {
    formState: { enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const { promptLoading, promptError } = useContext(AppContext);

  const handleClick = () => {
    if (enableSeedRandomisation) {
      const newSeed = Math.floor(Math.random() * 10 ** 10);
      updateFormState({ seed: newSeed });
    }
    bridge.prompt({ comfyUrl: data.ws.comfyUrl, promptData: {} });
  };

  return (
    <>
      {promptError && <ErrorText>{promptError}</ErrorText>}
      <Layout gap="md">
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
    </>
  );
};

export default FormControls;
