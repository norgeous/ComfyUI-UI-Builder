import { SettingsIcon } from '@/components/Icons';
import PopMenu from '@/components/PopMenu';
import { Label, Checkbox } from '@/components/InputCheckbox/styled';

const SettingsMenu = () => {
  console.log('!');

  return (
    <PopMenu
      aria-label="View Debug Data"
      menuContents={
        <>
          <Label>
            <Checkbox /> Scale images larger than their natural size
          </Label>
          <Label>
            <Checkbox /> Pixel optimisation smooth
          </Label>
        </>
      }
    >
      <SettingsIcon aria-label="Settings" />
    </PopMenu>
  );
};

export default SettingsMenu;
