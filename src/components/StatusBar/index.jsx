import { useContext, useState } from 'react';
import ComfyBridgeContext from '@/contexts/ComfyBridgeContext';
import WsContext from '@/contexts/WsContext';
import FormContext from '@/contexts/FormContext';
import ConfigsContext from '@/contexts/ConfigsContext';
import AppContext from '@/contexts/AppContext';
import { BugIcon, GithubIcon, StorybookIcon } from '@/components/Icons';
import StatusLight from '@/components/StatusLight';
import PopMenu from '@/components/PopMenu';
import Debug from '@/components/Debug';
import { Bar, Link, StatusText, Tray } from './styled';

const StatusBar = () => {
  const comfyBridge = useContext(ComfyBridgeContext);
  const { comfyUrl } = useContext(WsContext);
  const { formState } = useContext(FormContext);
  const {
    config: { baseWorkflow },
  } = useContext(ConfigsContext);
  const { adapted, adaptedComfyWorkflow, bodyData } = useContext(AppContext);

  const [debugData, setDebugData] = useState();
  const debugOptions = [
    { label: 'comfyBridge.ws', onClick: () => setDebugData('comfyBridge.ws') },
    {
      label: 'comfyBridge.objectInfo',
      onClick: () => setDebugData('comfyBridge.objectInfo'),
    },
    {
      label: 'comfyBridge.queue',
      onClick: () => setDebugData('comfyBridge.queue'),
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
    'comfyBridge.ws': comfyBridge.ws,
    'comfyBridge.objectInfo': comfyBridge.objectInfo,
    'comfyBridge.queue': comfyBridge.queue,
    formState,
    adapted,
    baseWorkflow,
    adaptedComfyWorkflow,
    bodyData,
  }[debugData];

  return (
    <Bar>
      <Tray $shrinkable>
        <StatusLight status={comfyBridge.ws?.status} />
        <StatusText>
          {comfyBridge.ws?.statusText} {comfyUrl}
        </StatusText>
      </Tray>
      <Tray>
        <Link
          href="https://github.com/norgeous/ComfyUI-UI-Builder/"
          target="_blank"
        >
          <GithubIcon aria-label="Github" />
        </Link>

        <Link
          href="https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/"
          target="_blank"
        >
          <StorybookIcon aria-label="Storybook" />
        </Link>

        <PopMenu aria-label="Debug Data Options" options={debugOptions}>
          <BugIcon />
        </PopMenu>
        {debugData && (
          <Debug onClick={() => setDebugData()} data={debugDatum} />
        )}
      </Tray>
    </Bar>
  );
};

export default StatusBar;
