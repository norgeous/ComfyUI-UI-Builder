import { userEvent, within } from '@storybook/test';
import component from '.';

export default {
  title: 'StatusBar',
  component,
};

export const StatusBar = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
