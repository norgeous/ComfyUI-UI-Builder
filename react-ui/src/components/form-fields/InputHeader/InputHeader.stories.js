import { action } from '@storybook/addon-actions';
import InputHeader from './InputHeader';

export default {
  title: 'Input/Header',
  component: InputHeader,
};

export const Header = {
  args: {
    handleReset: action('reset'),
  },
};
