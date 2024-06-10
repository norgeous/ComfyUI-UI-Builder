import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import component from './InputSelectCkpt';

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
