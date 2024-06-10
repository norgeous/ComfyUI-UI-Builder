import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import component from './InputText';

export default {
  title: 'InputText',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputText = {
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
  },
};
