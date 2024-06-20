import { useContext } from 'react';
import WsContext from '@/contexts/WsContext';
import FormContext from '@/contexts/FormContext';
import ConfigsContext from '@/contexts/ConfigsContext';
import ObjectInfoContext from '@/contexts/ObjectInfoContext';
import AppContext from '@/contexts/AppContext';
import Debug from '@/components/Debug';
import { GithubIcon, StorybookIcon } from '@/components/Icons';
import StatusLight from '@/components/StatusLight';
import { Bar, Tray } from './styled';

const StatusBar = () => {
  const { lastWsMessage, isGenerating, progress } = useContext(WsContext);
  const { formState } = useContext(FormContext);
  const {
    config: { baseWorkflow },
  } = useContext(ConfigsContext);
  const { objectInfoLoading, objectInfoError, objectInfo } =
    useContext(ObjectInfoContext);
  const { adapted, adaptedComfyWorkflow, bodyData } = useContext(AppContext);

  return (
    <Bar>
      <div>
        <StatusLight /> {lastWsMessage}{' '}
        {isGenerating && `${Math.round(progress * 100)}%`}
      </div>
      <Tray>
        <Debug label="formState" data={formState} />
        <Debug label="adapted" data={adapted} />
        <Debug label="baseWorkflow" data={baseWorkflow} />
        <Debug
          label="objectInfo"
          data={{ objectInfoLoading, objectInfoError, objectInfo }}
        />
        <Debug label="adaptedComfyWorkflow" data={adaptedComfyWorkflow} />
        <Debug label="bodyData" data={bodyData} />
        <a
          href="https://github.com/norgeous/ComfyUI-UI-Builder/"
          target="_blank"
        >
          <GithubIcon aria-label="Github" />
        </a>
        <a
          href="https://norgeous.github.io/ComfyUI-UI-Builder/"
          target="_blank"
        >
          <StorybookIcon aria-label="Storybook" />
        </a>
      </Tray>
    </Bar>
  );
};

export default StatusBar;