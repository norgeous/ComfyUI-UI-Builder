import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

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
