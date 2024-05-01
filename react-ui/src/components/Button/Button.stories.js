import { fn } from '@storybook/test';
import Button from './Button';

export default {
  title: 'Input/Button',
  component: Button,
};

export const Primary = {
  args: {
    children: 'button text',
    onClick: fn(),
  },
};
