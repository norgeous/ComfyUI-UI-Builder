import Checkbox from './Checkbox';

export default {
  title: 'uikit/Checkbox',
  component: Checkbox,
};

export const Unchecked = {
  args: {
    name: 'testname',
    options: [
      { label: 'option1', testname: false },
      { label: 'option2', testname: true },
    ],
    value: false,
  },
};

export const Checked = {
  args: {
    name: 'testname',
    options: [
      { label: 'option1', testname: false },
      { label: 'option2', testname: true },
    ],
    value: true,
  },
};
