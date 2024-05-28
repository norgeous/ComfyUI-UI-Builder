import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import InputSpeech from './InputSpeech';

export default {
  title: 'Input/Speech',
  component: InputSpeech,
  decorators: [SimpleStateDecorator],
};

export const Speech = {
  args: {
    id: 'demo',
    label: 'My InputSpeech Label',
    defaultValue: '',
  },
};
