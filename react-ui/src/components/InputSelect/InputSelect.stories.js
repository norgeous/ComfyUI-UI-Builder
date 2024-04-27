// import { fn } from '@storybook/test';
import InputSelect from './InputSelect';
import SimpleStateDecorator from '../../../.storybook/SimpleStateDecorator';

export default {
  title: 'Input/Select',
  component: InputSelect,
  decorators: [SimpleStateDecorator],
  // tags: ['autodocs'],
};

export const Select = {
  args: {
    id: 'demo',
    label: 'My InputSelect Label',
    defaultValue: { testname: 'foobar' },
    options: [
      { label: 'Option 1', value: { testname: false } },
      { label: 'Option 2', value: { testname: true } },
      { label: 'Option 3 (default)', value: { testname: 'foobar' } },
    ],
    // defaultOptionIndex: 0,
    error: 'ERR!',
    info: 'help text',
    // onChange: fn(),
  },
};
