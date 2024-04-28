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
  const adapted = executeAdapter({
    comfyUiData,
    formState,
    adapterConfig,
  });

  if (!comfyUiData.objectInfo) return { adapted };

  const adaptedComfyWorkflow = adapted.reduce(
    (acc, { destination, value }) =>
      insertIntoComfyWorkFlow(acc, comfyUiData.objectInfo, destination, value),
    structuredClone(baseWorkflow),
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
