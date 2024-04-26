import { fn } from '@storybook/test';
import InputSelect from './InputSelect';

export default {
  title: 'InputSelect',
  component: InputSelect,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    id: 'demo',
    label: 'My Label',
    options: [
      { label: 'Option 0 (default)', value: { testname: false } },
      { label: 'Option 1', value: { testname: true } },
      { label: 'Option 2', value: { testname: 'foobar' } },
    ],
    defaultOptionIndex: 0,
    onChange: fn(),
  },
};

export const ResetButton = {
  args: {
    id: 'demo',
    label: 'My Label',
    options: [
      { label: 'Option 0 (default)', value: { testname: false } },
      { label: 'Option 1', value: { testname: true } },
      { label: 'Option 2', value: { testname: 'foobar' } },
    ],
    defaultOptionIndex: 0,
    value: 1,
    onChange: fn(),
  },
};

export const HelpMessage = {
  args: {
    id: 'demo',
    label: 'My Label',
    info: 'my help text',
    options: [
      { label: 'Option 0 (default)', value: { testname: false } },
      { label: 'Option 1', value: { testname: true } },
      { label: 'Option 2', value: { testname: 'foobar' } },
    ],
    defaultOptionIndex: 0,
    onChange: fn(),
  },
};

export const ErrorMessage = {
  args: {
    id: 'demo',
    label: 'My Label',
    options: [
      { label: 'Option 0 (default)', value: { testname: false } },
      { label: 'Option 1', value: { testname: true } },
      { label: 'Option 2', value: { testname: 'foobar' } },
    ],
    defaultOptionIndex: 0,
    onChange: fn(),
    error: 'There was a problem with the value of this input!',
  },
};
