import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import InputSeed from './InputSeed';

export default {
  title: 'Input/Seed',
  component: InputSeed,
  decorators: [SimpleStateDecorator],
};

export const Seed = {
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
