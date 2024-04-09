import { useState } from 'react';
import configs from '../configs';

const useConfig = () => {
  const [config, setConfig] = useState(configs[0]);

  return {
    config,
    configs,
    setConfig,
  };
};

export default useConfig;
