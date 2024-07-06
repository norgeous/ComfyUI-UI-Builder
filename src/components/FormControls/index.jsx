import { useContext, useState } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';

import executeAdapter from '@/utils/executeAdapter';
import comfyWorkflowToComfyPrompt, {
  insertIntoComfyWorkFlow,
} from '@ui-builder/comfybridge/utils/comfyWorkflowToComfyPrompt';

import ConfigsContext from '@/contexts/ConfigsContext';
import FormContext from '@/contexts/FormContext';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import ErrorText from '@/components/ErrorText';
import Tooltip from '@/components/Tooltip';
import { SpinnerIcon, PauseIcon, PlayIcon } from '@/components/Icons';

const FormControls = () => {
  const { bridge, data } = useContext(ComfyBridgeContext);
  const { error: promptError, loading: promptLoading } = data.prompt;

  const [auto, setAuto] = useState(false);

  const {
    config,
    config: { baseWorkflow },
  } = useContext(ConfigsContext);

  const {
    formState,
    formState: { enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const handleClick = () => {
    if (enableSeedRandomisation) {
      const newSeed = Math.floor(Math.random() * 10 ** 10);
      updateFormState({ seed: newSeed });
    }

    const adapted = executeAdapter({
      objectInfo: data.objectInfo.data,
      formState,
      adapterConfig: config.configData.adapterConfig,
    });

    const clone = structuredClone({ ...baseWorkflow });

    const adaptedComfyWorkflow = adapted.reduce(
      (acc, { destination, value }) =>
        insertIntoComfyWorkFlow(acc, data.objectInfo, destination, value),
      clone,
    );

    const promptData = comfyWorkflowToComfyPrompt({
      comfyWorkflow: adaptedComfyWorkflow,
      objectInfo: data.objectInfo.data,
    });

    bridge.prompt({ comfyUrl: data.ws.comfyUrl, promptData });
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
