import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from './InputSpeech';

export default {
  title: 'InputSpeech',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputSpeech = {
  args: {
    id: 'demo',
    label: 'My InputSpeech Label',
    info: 'help text',
    defaultValue: '',
  },
};
