import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import component from './InputSeed';

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
