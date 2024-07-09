import { within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'DebugMenu',
  component,
};

export const DebugMenu = {
  parameters: {
    screenshot: {
      viewport: {
        width: 412,
        height: 250,
      },
    },
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
