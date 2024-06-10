import { fn } from '@storybook/test';
import component from './Button';

export default {
  title: 'Button',
  component,
};

export const Primary = {
  args: {
    children: 'button text',
    onClick: fn(),
    wide: false,
  },
};

export const Secondary = {
  args: {
    children: 'button text',
    onClick: fn(),
    wide: false,
    variant: 'secondary',
  },
};
