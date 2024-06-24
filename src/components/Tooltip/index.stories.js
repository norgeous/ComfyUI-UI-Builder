import { userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'Tooltip',
  component,
};

export const Tooltip = {
  args: {
    text: 'This is the tooltip text!',
    children: 'Hover Me',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
