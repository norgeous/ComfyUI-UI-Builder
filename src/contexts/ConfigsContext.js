import { createContext } from 'react';
import noop from '@/utils/noop';

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
  setConfig: noop,
});

export default ConfigsContext;
