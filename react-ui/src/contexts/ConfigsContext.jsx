import { createContext } from 'react';
import PropTypes from 'prop-types';
import useConfig from '../hooks/useConfig';

export const ConfigsContext = createContext({});

const ConfigsProvider = ({ children }) => {
  const { config, configs, setConfig } = useConfig();

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
