import InputRange from './InputRange';
import SimpleStateDecorator from '../../../.storybook/SimpleStateDecorator';

export default {
  title: 'Input/Range',
  component: InputRange,
  decorators: [SimpleStateDecorator],
};

export const Range = {
  args: {
    id: 'demo',
    label: 'My InputRange Label',
    defaultValue: 1,
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: 'X', value: { testname: 'foobar' } },
    ],
    defaultOptionIndex: 0,
    isLoading: false,
    error: 'ERR!',
    info: 'help text',
  },
};
