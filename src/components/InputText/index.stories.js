import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

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
    defaultValue: '',
    controlOptions: ['weight', 'speech', 'limit'],
  },
};
