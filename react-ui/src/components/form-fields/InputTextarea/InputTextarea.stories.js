import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import InputTextarea from './InputTextarea';

export default {
  title: 'Input/Textarea',
  component: InputTextarea,
  decorators: [SimpleStateDecorator],
};

export const Textarea = {
  args: {
    id: 'demo',
    label: 'My InputTextarea Label',
    info: 'info text',
    defaultValue: '',
    error: 'ERR!',
  },
};
