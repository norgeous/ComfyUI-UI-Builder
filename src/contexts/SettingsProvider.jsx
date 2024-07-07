import { useState } from 'react';
import PropTypes from 'prop-types';
import ConfigsContext from './ConfigsContext';

const useSettings = () => {
  const [settings, setSettings] = useState({
    scaleUp: true,
    pixelSmooth: true,
  });

  const updateSetting = newSetting =>
    setSettings({ ...settings, ...newSetting });

  return {
    settings,
    updateSetting,
  };
};

const SettingsProvider = ({ children = null }) => (
  <ConfigsContext.Provider value={useSettings()}>
    {children}
  </ConfigsContext.Provider>
);

SettingsProvider.propTypes = { children: PropTypes.node };

export default SettingsProvider;
