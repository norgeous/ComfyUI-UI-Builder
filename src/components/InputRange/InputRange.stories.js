import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from './InputRange';

export default {
  title: 'InputRange',
  component,
  decorators: [SimpleStateDecorator],
};

export const Pips = {
  args: {
    id: 'demo-range-pips',
    label: 'My InputRange Label',
    info: 'help text',
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
  },
};

export const Dual = {
  args: {
    id: 'demo-range-dual',
    label: 'My InputRange Label',
    info: 'help text',
    defaultValueIndex: 2,
    options: [
      { label: 'Smallest Value', value: 1 },
      { value: 2 },
      { value: { testname: 'foobar' } },
      { label: 'Largest Value', value: { second: 'bazquux' } },
    ],
  },
};
