import { userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'InputHeader',
  component,
};

export const InputHeader = {
  args: {
    id: 'test',
    label: 'My InputHeader Label',
    info: 'Helpful info text about this input',
    children: 'extra children',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
