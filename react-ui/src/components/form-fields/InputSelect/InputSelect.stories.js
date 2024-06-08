import SimpleStateDecorator from '@/../.storybook/SimpleStateDecorator';
import InputSelect from './InputSelect';

export default {
  title: 'Input/Select',
  component: InputSelect,
  decorators: [SimpleStateDecorator],
};

export const Select = {
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
