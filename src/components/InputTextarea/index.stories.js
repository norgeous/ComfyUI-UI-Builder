import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

export default {
  title: 'InputTextarea',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputTextarea = {
  args: {
    id: 'demo',
    label: 'My InputTextarea Label',
    info: 'info text',
    defaultValue: '',
  },
};
