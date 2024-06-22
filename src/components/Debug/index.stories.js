import { fn } from '@storybook/test';
import component from '.';

export default {
  title: 'Debug',
  component,
};

export const Debug = {
  args: {
    onClick: fn(),
    data: { foo: 'bar' },
  },
};
