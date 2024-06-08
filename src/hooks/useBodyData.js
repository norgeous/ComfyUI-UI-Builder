import comfyWorkflowToComfyPrompt, {
  insertIntoComfyWorkFlow,
} from '../utils/comfyWorkflowToComfyPrompt';
import executeAdapter from '../utils/executeAdapter';

const useBodyData = ({
  clientId,
  comfyUiData,
  formState,
  baseWorkflow,
  adapterConfig,
}) => {
  if (!baseWorkflow) return {};

  const adapted = executeAdapter({
    comfyUiData,
    formState,
    adapterConfig,
  });

  if (!comfyUiData.objectInfo) return { adapted };

  const clone = structuredClone({ ...baseWorkflow });

  const adaptedComfyWorkflow = adapted.reduce(
    (acc, { destination, value }) =>
      insertIntoComfyWorkFlow(acc, comfyUiData.objectInfo, destination, value),
    clone,
  );

  const prompt = comfyWorkflowToComfyPrompt({
    comfyWorkflow: adaptedComfyWorkflow,
    objectInfo: comfyUiData.objectInfo,
  });

  const bodyData = {
    client_id: clientId,
    prompt,
  };

  return { adapted, adaptedComfyWorkflow, bodyData };
};

export default useBodyData;
