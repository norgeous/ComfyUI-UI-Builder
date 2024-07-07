import { SettingsIcon } from '@/components/Icons';
import PopMenu from '@/components/PopMenu';

const SettingsMenu = () => {
  const options = [
    { label: 'op1', onClick: () => alert('WIP') },
    { label: 'op2', onClick: () => alert('WIP') },
  ];

  return (
    <PopMenu aria-label="View Debug Data" options={options}>
      <SettingsIcon aria-label="Settings" />
    </PopMenu>
  );
};

export default SettingsMenu;
