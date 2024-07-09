import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import { GithubIcon, StorybookIcon } from '@/components/Icons';
import StatusLight from '@/components/StatusLight';
import Tooltip from '@/components/Tooltip';
import SettingsMenu from '@/components/SettingsMenu';
import DebugMenu from '@/components/DebugMenu';
import { Bar, Link, StatusText, Tray } from './styled';

const StatusBar = () => {
  const comfyBridge = useContext(ComfyBridgeContext);

  return (
    <Bar>
      <Tray $shrinkable>
        <StatusLight status={comfyBridge.data.ws.status} />
        <StatusText>{comfyBridge.data.ws.statusText}</StatusText>
      </Tray>
      <Tray>
        <Tooltip text="Github">
          <Link
            href="https://github.com/norgeous/ComfyUI-UI-Builder/"
            target="_blank"
            // aria-label="Github"
          >
            <GithubIcon />
          </Link>
        </Tooltip>

        <Tooltip text="Storybook">
          <Link
            href="https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/"
            target="_blank"
            // aria-label="Storybook"
          >
            <StorybookIcon />
          </Link>
        </Tooltip>

        <DebugMenu />

        <SettingsMenu />
      </Tray>
    </Bar>
  );
};

export default StatusBar;
