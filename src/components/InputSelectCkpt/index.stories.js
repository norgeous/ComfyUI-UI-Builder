import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

export default {
  title: 'InputSelectCkpt',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputSelectCkpt = {
  args: {
    id: 'demo',
    label: 'My InputSelectCkpt Label',
    info: 'help text',
    defaultValue: '',
  },
};
