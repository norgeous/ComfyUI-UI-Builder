import { fn } from '@storybook/test';
import InputText from './InputText';

export default {
  title: 'Input/Text',
  component: InputText,
};

export const Text = {
  args: {
    id: 'demo',
    label: 'My InputText Label',
    info: 'info text',
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
      'Option 5',
      'Option 6',
    ],
    defaultValue: '',
    error: 'error text',
    onChange: fn(),
  },
};
