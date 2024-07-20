import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

export default {
  title: 'InputText2',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputText2 = {
  args: {
    id: 'demo',
    label: 'My InputText2 Label',
    info: 'info text',
    defaultValue: '',
    controlOptions: ['weight', 'speech', 'limit'],
  },
};
