import { useContext, useEffect, useState } from 'react';
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

const MAXSEED = 10 ** 10;

const FormControls = () => {
  const { bridge, data } = useContext(ComfyBridgeContext);
  const { error: promptError, loading: promptLoading } = data.prompt;

  const [auto, setAuto] = useState(false);

  const {
    config,
    config: { baseWorkflow },
  } = useContext(ConfigsContext);

  const { formState, updateFormState } = useContext(FormContext);

  const handlePrompt = () => {
    if (formState.seed.random) {
      const newSeed = Math.floor(Math.random() * MAXSEED);
      formState.seed.seed = newSeed; // a bit of a hack, so new seed is immediately available
      updateFormState({ seed: { ...formState.seed, seed: newSeed } });
    }

    const adapted = executeAdapter({
      objectInfo: data.objectInfo.data,
      formState,
      adapterConfig: config.configData.adapterConfig,
    });

    const clone = structuredClone({ ...baseWorkflow });

    const adaptedComfyWorkflow = adapted.reduce(
      (acc, { destination, value }) =>
        insertIntoComfyWorkFlow(acc, data.objectInfo.data, destination, value),
      clone,
    );

    const promptData = comfyWorkflowToComfyPrompt({
      comfyWorkflow: adaptedComfyWorkflow,
      objectInfo: data.objectInfo.data,
    });

    bridge.prompt({ promptData });
  };

  // auto prompting on change
  useEffect(() => {
    const isGenerating = Object.values(data.queue)
      .filter(v => v)
      .map(({ node }) => node !== null)
      .some(v => v);
    if (auto && !isGenerating) handlePrompt();
  }, [formState, auto]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout as="footer" pad column gap="md" bgfg={2}>
      {promptError && <ErrorText>{promptError}</ErrorText>}
      <Layout gap="md">
        {!auto && (
          <Button wide onClick={handlePrompt}>
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
