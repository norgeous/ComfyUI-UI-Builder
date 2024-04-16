import { useState, useEffect } from 'react';
import getConfigs from '../configs';

const useConfig = () => {
  const [configs, setConfigs] = useState([]);
  const [config, setConfig] = useState({});

  useEffect(() => {
    (async () => {
      const aConfigs = await getConfigs();
      setConfigs(aConfigs);
      setConfig(aConfigs[0]);
    })();
  }, []);

  return {
    config,
    configs,
    setConfig,
  };
};

export default useConfig;
