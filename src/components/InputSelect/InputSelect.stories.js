import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from './InputSelect';

export default {
  title: 'InputSelect',
  component,
  decorators: [SimpleStateDecorator],
};

export const InputSelect = {
  args: {
    id: 'demo',
    label: 'My InputSelect Label',
    info: 'help text',
    defaultValueIndex: 2,
    options: [
      { label: 'Option 1', value: { testname: false } },
      { label: 'Option 2', value: { testname: true } },
      { label: 'Option 3 (default)', value: { testname: 'foobar' } },
    ],
  },
};
