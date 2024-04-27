import { fn } from '@storybook/test';
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
    options: [
      { label: 'Option 0 (default)', value: { testname: false } },
      { label: 'Option 1', value: { testname: true } },
      { label: 'Option 2', value: { testname: 'foobar' } },
    ],
    defaultOptionIndex: 0,
    onChange: fn(),
  },
};
