import { within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'DebugMenu',
  component,
};

export const DebugMenu = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
