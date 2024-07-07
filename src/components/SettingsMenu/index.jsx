import SettingsContext from '@/contexts/SettingsContext';
import { SettingsIcon } from '@/components/Icons';
import PopMenu from '@/components/PopMenu';
import { Label, Checkbox } from '@/components/InputCheckbox/styled';
import { useContext } from 'react';

const SettingsMenu = () => {
  const {
    settings: { scaleUp, pixelSmooth },
    updateSettings,
  } = useContext(SettingsContext);

  return (
    <PopMenu
      aria-label="View Debug Data"
      menuContents={
        <>
          <Label>
            <Checkbox
              checked={scaleUp}
              onChange={event =>
                updateSettings({ scaleUp: event.target.checked })
              }
            />{' '}
            Scale images beyond their natural size
          </Label>
          <Label>
            <Checkbox
              checked={pixelSmooth}
              onChange={event =>
                updateSettings({ pixelSmooth: event.target.checked })
              }
            />{' '}
            Enabled pixel smoothing optimisation
          </Label>
        </>
      }
    >
      <SettingsIcon aria-label="Settings" />
    </PopMenu>
  );
};

export default SettingsMenu;
