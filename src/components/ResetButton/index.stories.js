import { fn } from '@storybook/test';
import component from '.';

export default {
  title: 'ResetButton',
  component,
};

export const ResetButton = {
  args: {
    onClick: fn(),
  },
};
