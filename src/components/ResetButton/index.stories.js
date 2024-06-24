import { fn, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'ResetButton',
  component,
};

export const ResetButton = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
