import comfyWorkflowToComfyPrompt from '../utils/comfyWorkflowToComfyPrompt';
import executeAdapter from '../utils/executeAdapter';

const useBodyData = ({
  clientId,
  comfyUiData,
  formState,
  baseWorkflow,
  adapterConfig,
}) => {
  // wait for comfy ui data
  if (!comfyUiData.objectInfo) return {};

  const adaptedComfyWorkflow = executeAdapter({
    comfyUiData,
    formState,
    baseWorkflow,
    adapterConfig,
  });

  const prompt = comfyWorkflowToComfyPrompt({
    comfyWorkflow: adaptedComfyWorkflow,
    objectInfo: comfyUiData.objectInfo,
  });

  const bodyData = {
    client_id: clientId,
    prompt,
  };

  return { adaptedComfyWorkflow, bodyData };
};

export default useBodyData;
