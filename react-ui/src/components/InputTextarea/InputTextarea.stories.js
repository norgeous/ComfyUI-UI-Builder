import InputTextarea from './InputTextarea';
import SimpleStateDecorator from '../../../.storybook/SimpleStateDecorator';

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
