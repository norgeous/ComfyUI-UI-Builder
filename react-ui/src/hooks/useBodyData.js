import comfyWorkflowToComfyPrompt from '../utils/comfyWorkflowToComfyPrompt';
import executeAdapter from '../utils/executeAdapter';

const useBodyData = ({ clientId, comfyUiData, formState, baseWorkflow, adapterConfig }) => {
  // console.log('useBodyData', {comfyUiData,formState});
  // wait for comfy ui data
  if (!comfyUiData.objectInfo) return;

  const comfyWorkflow = executeAdapter({
    comfyUiData,
    formState,
    baseWorkflow,
    adapterConfig,
  });

  console.log({comfyWorkflow,comfyUiData,formState});

  const prompt = comfyWorkflowToComfyPrompt({ comfyWorkflow });

  const bodyData = {
    client_id: clientId,
    prompt,
  };

  return bodyData;
};

export default useBodyData;
