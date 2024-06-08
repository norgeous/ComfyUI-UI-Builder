import { fn } from '@storybook/test';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = {
  args: {
    children: 'button text',
    onClick: fn(),
  },
};
