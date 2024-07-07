import { within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'SettingsMenu',
  component,
};

export const SettingsMenu = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
