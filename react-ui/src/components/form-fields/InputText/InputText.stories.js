import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import InputText from './InputText';

export default {
  title: 'Input/Text',
  component: InputText,
  decorators: [SimpleStateDecorator],
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
    error: 'ERR!',
  },
};
