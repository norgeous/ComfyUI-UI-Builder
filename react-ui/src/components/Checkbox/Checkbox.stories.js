import Checkbox from './Checkbox';

export default {
  title: 'uikit/Checkbox',
  component: Checkbox,
};

export const Unchecked = {
  args: {
    name: 'testname',
    options: [
      { label: 'Option 1', testname: false },
      { label: 'Option 2', testname: true },
    ],
    value: false,
  },
};

export const Checked = {
  args: {
    name: 'testname',
    options: [
      { label: 'Option 1', testname: false },
      { label: 'Option 2', testname: true },
    ],
    value: true,
  },
};
