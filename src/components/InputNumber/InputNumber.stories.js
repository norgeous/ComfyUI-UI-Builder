import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import component from './InputNumber';

export default {
  title: 'InputNumber',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputNumber = {
  args: {
    id: 'demo',
    label: 'My InputNumber Label',
    info: 'info text',
    defaultValue: 69,
    min: 42,
    max: 420,
  },
};
