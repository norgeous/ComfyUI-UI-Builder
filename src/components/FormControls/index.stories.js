import { within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'FormControls',
  component,
};

export const FormControls = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole('button')[1]);
  },
};
