import { createContext } from 'react';

const SettingsContext = createContext({
  settings: {
    scaleUp: true,
    pixelSmooth: true,
  },
  updateSettings: () => {},
});

export default SettingsContext;
