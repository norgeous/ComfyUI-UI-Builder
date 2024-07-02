import { createContext } from 'react';

const ConfigsContext = createContext({
  config: {
    directoryName: undefined,
    baseWorkflow: undefined,
    configData: {
      formConfig: [],
    },
    formInitialState: {},
  },
  configs: [],
  setConfig: () => {},
});

export default ConfigsContext;
