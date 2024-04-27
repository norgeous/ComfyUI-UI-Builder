import InputNumber from './InputNumber';
import SimpleStateDecorator from '../../../.storybook/SimpleStateDecorator';

export default {
  title: 'Input/Number',
  component: InputNumber,
  decorators: [SimpleStateDecorator],
};

export const Number = {
  args: {
    id: 'demo',
    label: 'My InputNumber Label',
    info: 'info text',
    defaultValue: 69,
    isLoading: false,
    error: 'ERR!',
    min: 60,
    max: 420,
  },
};
