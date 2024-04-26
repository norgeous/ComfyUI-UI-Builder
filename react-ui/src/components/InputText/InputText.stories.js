import { fn } from '@storybook/test';
import InputText from './InputText';

export default {
  title: 'InputText',
  component: InputText,
};

export const Default = {
  args: {
    id: 'demo',
    label: 'My Label',
    info: 'info text',
    options: ['Option 1', 'Option 2'],
    defaultValue: '',
    error: 'error text',
    onChange: fn(),
  },
};
