import InputCheckbox from './Checkbox';

export default {
  title: 'Input/Checkbox',
  component: InputCheckbox,
};

export const Checkbox = {
  args: {
    name: 'testname',
    options: [
      { label: 'Option 1', testname: false },
      { label: 'Option 2', testname: true },
    ],
    value: false,
  },
};
