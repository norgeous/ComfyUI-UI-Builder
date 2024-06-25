import { useContext, useState } from 'react';
import AppContext from '@/contexts/AppContext';
import FormContext from '@/contexts/FormContext';
import ComfyBridgeContext from '@/contexts/ComfyBridgeContext';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import ErrorText from '@/components/ErrorText';
import Tooltip from '@/components/Tooltip';
import { SpinnerIcon, PauseIcon, PlayIcon } from '@/components/Icons';
import QueueItem from '../QueueItem';

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
      <Layout column vscroll>
        {data.queue.map(item => (
          <QueueItem key={item.id} {...item} /> // eslint-disable-line react/jsx-props-no-spreading
        ))}
      </Layout>
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
