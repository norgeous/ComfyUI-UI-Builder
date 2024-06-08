import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ConfigsContext from './ConfigsContext';
import getConfigs from '../configs';

const ConfigsProvider = ({ children = null }) => {
  const [configs, setConfigs] = useState([]);
  const [config, setConfig] = useState({ configData: { formConfig: [] } });

  // async load the entire src/configs directory
  useEffect(() => {
    (async () => {
      const aConfigs = await getConfigs();
      setConfigs(aConfigs);
      setConfig(aConfigs[0]);
    })();
  }, []);

  return (
    <ConfigsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        config,
        configs,
        setConfig,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};

ConfigsProvider.propTypes = { children: PropTypes.node };

export default ConfigsProvider;
