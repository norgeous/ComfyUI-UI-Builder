import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

export default {
  title: 'InputNumberRange',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputNumberRange = {
  args: {
    id: 'demo',
    label: 'My InputNumberRange Label',
    info: 'info text',
    defaultValue: 69,
    min: 42,
    max: 420,
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
    ],
  },
};
