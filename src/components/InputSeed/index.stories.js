import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

export default {
  title: 'InputSeed',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputSeed = {
  args: {
    id: 'demo-seed',
    label: 'My InputSeed Label',
    info: 'help text',
    defaultValue: {
      seed: 69,
      random: true,
    },
  },
};
