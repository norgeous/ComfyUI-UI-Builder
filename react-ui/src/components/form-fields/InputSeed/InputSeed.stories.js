import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import InputSeed from './InputSeed';

export default {
  title: 'Input/Seed',
  component: InputSeed,
  decorators: [SimpleStateDecorator],
};

export const Seed = {
  args: {
    id: 'demo',
    label: 'My InputSeed Label',
    info: 'info text',
    defaultValue: 69,
    error: 'ERR!',
  },
};
