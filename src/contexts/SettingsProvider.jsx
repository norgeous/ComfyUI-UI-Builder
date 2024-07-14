import { useState } from 'react';
import PropTypes from 'prop-types';
import SettingsContext from './SettingsContext';

const useSettings = () => {
  const [settings, setSettings] = useState({
    scaleUp: true,
    pixelSmooth: true,
  });

  const updateSettings = newSetting => {
    setSettings({ ...settings, ...newSetting });
  };

  return {
    settings,
    updateSettings,
  };
};

const SettingsProvider = ({ children = null }) => (
  <SettingsContext.Provider value={useSettings()}>
    {children}
  </SettingsContext.Provider>
);

SettingsProvider.propTypes = { children: PropTypes.node };

export default SettingsProvider;
