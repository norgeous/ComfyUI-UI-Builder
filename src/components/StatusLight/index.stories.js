import component from '.';

export default {
  title: 'StatusLight',
  component,
};

export const DEFAULT = {
  parameters: { screenshot: { viewport: { width: 54, height: 54 } } },
  args: {
    status: 'DEFAULT',
  },
};

export const CONNECTING = {
  parameters: { screenshot: { viewport: { width: 54, height: 54 } } },
  args: {
    status: 'CONNECTING',
  },
};

export const CONNECTED = {
  parameters: { screenshot: { viewport: { width: 54, height: 54 } } },
  args: {
    status: 'CONNECTED',
  },
};

export const DISCONNECTED = {
  parameters: { screenshot: { viewport: { width: 54, height: 54 } } },
  args: {
    status: 'DISCONNECTED',
  },
};
