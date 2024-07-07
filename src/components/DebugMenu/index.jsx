import { useContext, useState } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import FormContext from '@/contexts/FormContext';
import ConfigsContext from '@/contexts/ConfigsContext';
import { BugIcon } from '@/components/Icons';
import PopMenu from '@/components/PopMenu';
import Debug from '@/components/Debug';

const DebugMenu = () => {
  const comfyBridge = useContext(ComfyBridgeContext);
  const { formState } = useContext(FormContext);
  const {
    config: { baseWorkflow },
  } = useContext(ConfigsContext);
  const { adapted, adaptedComfyWorkflow, bodyData } =
    useContext(ComfyBridgeContext);

  const [debugData, setDebugData] = useState();
  const debugOptions = [
    {
      label: 'comfyBridge.data.ws',
      onClick: () => setDebugData('comfyBridge.data.ws'),
    },
    {
      label: 'comfyBridge.data.objectInfo',
      onClick: () => setDebugData('comfyBridge.data.objectInfo'),
    },
    {
      label: 'comfyBridge.data.prompt',
      onClick: () => setDebugData('comfyBridge.data.prompt'),
    },
    {
      label: 'comfyBridge.data.queue',
      onClick: () => setDebugData('comfyBridge.data.queue'),
    },
    {
      label: 'comfyBridge.data.queueSelected',
      onClick: () => setDebugData('comfyBridge.data.queueSelected'),
    },
    { label: 'formState', onClick: () => setDebugData('formState') },
    { label: 'adapted', onClick: () => setDebugData('adapted') },
    {
      label: 'baseWorkflow',
      onClick: () => setDebugData('baseWorkflow'),
    },
    {
      label: 'adaptedComfyWorkflow',
      onClick: () => setDebugData('adaptedComfyWorkflow'),
    },
    { label: 'bodyData', onClick: () => setDebugData('bodyData') },
  ];

  const debugDatum = {
    'comfyBridge.data.ws': comfyBridge.data.ws,
    'comfyBridge.data.objectInfo': comfyBridge.data.objectInfo,
    'comfyBridge.data.prompt': comfyBridge.data.prompt,
    'comfyBridge.data.queue': comfyBridge.data.queue,
    'comfyBridge.data.queueSelected': comfyBridge.data.queueSelected,
    formState,
    adapted,
    baseWorkflow,
    adaptedComfyWorkflow,
    bodyData,
  }[debugData];

  return (
    <>
      <PopMenu aria-label="View Debug Data" options={debugOptions}>
        <BugIcon />
      </PopMenu>
      {debugData && <Debug onClick={() => setDebugData()} data={debugDatum} />}
    </>
  );
};

export default DebugMenu;
