import { action } from '@storybook/addon-actions';
import InputHeader from './InputHeader';

export default {
  title: 'Input/Header',
  component: InputHeader,
};

export const Header = {
  args: {
    id: 'test',
    label: 'My InputHeader Label',
    info: 'my info text',
    isLoading: true,
    showReset: true,
    handleReset: action('reset'),
  },
};
