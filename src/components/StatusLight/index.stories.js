import component from '.';

export default {
  title: 'StatusLight',
  component,
};

export const DEFAULT = {
  args: {
    status: 'DEFAULT',
  },
};

export const CONNECTING = {
  args: {
    status: 'CONNECTING',
  },
};

export const CONNECTED = {
  args: {
    status: 'CONNECTED',
  },
};

export const DISCONNECTED = {
  args: {
    status: 'DISCONNECTED',
  },
};
