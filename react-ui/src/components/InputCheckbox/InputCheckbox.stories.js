import InputCheckbox from './InputCheckbox';
import SimpleStateDecorator from '../../../.storybook/SimpleStateDecorator';

export default {
  title: 'Input/Checkbox',
  component: InputCheckbox,
  decorators: [SimpleStateDecorator],
};

export const Checkbox = {
  args: {
    id: 'demo',
    info: 'helpful text...',
    options: ['My InputCheckbox Label (off)', 'My InputCheckbox Label (on)'],
    defaultOptionIndex: 1,
    defaultValue: false,
    error: 'ERR!',
  },
};
