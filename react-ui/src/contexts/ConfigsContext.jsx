import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getConfigs from '../configs';

export const ConfigsContext = createContext({});

const ConfigsProvider = ({ children }) => {
  const [configs, setConfigs] = useState([]);
  const [config, setConfig] = useState({});

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

ConfigsProvider.defaultProps = { children: null };

ConfigsProvider.propTypes = { children: PropTypes.node };

export default ConfigsProvider;
