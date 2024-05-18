import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import InputRange from './InputRange';

export default {
  title: 'Input/Range',
  component: InputRange,
  decorators: [SimpleStateDecorator],
};

export const Pips = {
  args: {
    id: 'demo',
    label: 'My InputRange Label',
    defaultValueIndex: 5,
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '5', value: 5 },
      { label: '10', value: 10 },
      { label: 'X', value: { testname: 'foobar' } },
      { label: 'Y', value: { testname: 'bazquux' } },
      { label: 'Z', value: { testname: 'foobar', second: 'bazquux' } },
    ],
    isLoading: false,
    error: 'ERR!',
    info: 'help text',
  },
};

export const Dual = {
  args: {
    id: 'demo',
    label: 'My InputRange Label',
    defaultValueIndex: 2,
    options: [
      { label: 'Smallest Value', value: 1 },
      { value: 2 },
      { value: { testname: 'foobar' } },
      { label: 'Largest Value', value: { second: 'bazquux' } },
    ],
    isLoading: false,
    error: 'ERR!',
    info: 'help text',
  },
};
