import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import { GithubIcon, StorybookIcon } from '@/components/Icons';
import StatusLight from '@/components/StatusLight';
import SettingsMenu from '@/components/SettingsMenu';
import { Bar, Link, StatusText, Tray } from './styled';
import DebugMenu from '../DebugMenu';

const StatusBar = () => {
  const comfyBridge = useContext(ComfyBridgeContext);

  return (
    <Bar>
      <Tray $shrinkable>
        <StatusLight status={comfyBridge.data.ws.status} />
        <StatusText>{comfyBridge.data.ws.statusText}</StatusText>
      </Tray>
      <Tray>
        <Link
          href="https://github.com/norgeous/ComfyUI-UI-Builder/"
          target="_blank"
          aria-label="Github"
        >
          <GithubIcon />
        </Link>

        <Link
          href="https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/"
          target="_blank"
          aria-label="Storybook"
        >
          <StorybookIcon />
        </Link>

        <DebugMenu />

        <SettingsMenu />
      </Tray>
    </Bar>
  );
};

export default StatusBar;
