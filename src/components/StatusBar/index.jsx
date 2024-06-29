import { useContext, useState } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/ComfyBridgeContext';
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
  const { formState } = useContext(FormContext);
  const {
    config: { baseWorkflow },
  } = useContext(ConfigsContext);
  const { adapted, adaptedComfyWorkflow, bodyData } = useContext(AppContext);

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
      label: 'comfyBridge.data.queue',
      onClick: () => setDebugData('comfyBridge.data.queue'),
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
    'comfyBridge.data.queue': comfyBridge.data.queue,
    formState,
    adapted,
    baseWorkflow,
    adaptedComfyWorkflow,
    bodyData,
  }[debugData];

  return (
    <Bar>
      <Tray $shrinkable>
        <StatusLight status={comfyBridge.data.ws.status} />
        <StatusText>
          {comfyBridge.data.ws.statusText} {comfyBridge.comfyUrl}
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
