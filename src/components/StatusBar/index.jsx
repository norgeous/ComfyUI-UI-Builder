import { useContext, useState } from 'react';
import ComfyBridgeContext from '@/contexts/ComfyBridgeContext';
import WsContext from '@/contexts/WsContext';
import FormContext from '@/contexts/FormContext';
import ConfigsContext from '@/contexts/ConfigsContext';
import ObjectInfoContext from '@/contexts/ObjectInfoContext';
import AppContext from '@/contexts/AppContext';
import { BugIcon, GithubIcon, StorybookIcon } from '@/components/Icons';
import StatusLight from '@/components/StatusLight';
import PopMenu from '@/components/PopMenu';
import Debug from '@/components/Debug';
import { Bar, Link, Tray } from './styled';

const StatusBar = () => {
  const comfyBridge = useContext(ComfyBridgeContext);
  const { comfyUrl } = useContext(WsContext);
  const { formState } = useContext(FormContext);
  const {
    config: { baseWorkflow },
  } = useContext(ConfigsContext);
  const { objectInfoLoading, objectInfoError, objectInfo } =
    useContext(ObjectInfoContext);
  const { adapted, adaptedComfyWorkflow, bodyData } = useContext(AppContext);

  const [debugData, setDebugData] = useState();
  const debugOptions = [
    { label: 'comfyBridge', onClick: () => setDebugData('comfyBridge') },
    { label: 'formState', onClick: () => setDebugData('formState') },
    { label: 'adapted', onClick: () => setDebugData('adapted') },
    {
      label: 'baseWorkflow',
      onClick: () => setDebugData('baseWorkflow'),
    },
    {
      label: 'objectInfo',
      onClick: () => setDebugData('objectInfo'),
    },
    {
      label: 'adaptedComfyWorkflow',
      onClick: () => setDebugData('adaptedComfyWorkflow'),
    },
    { label: 'bodyData', onClick: () => setDebugData('bodyData') },
  ];

  const debugDatum = {
    comfyBridge,
    formState,
    adapted,
    baseWorkflow,
    objectInfo: {
      objectInfoLoading,
      objectInfoError,
      objectInfo,
    },
    adaptedComfyWorkflow,
    bodyData,
  }[debugData];

  return (
    <Bar>
      <div>
        <StatusLight /> {comfyUrl}
      </div>
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
