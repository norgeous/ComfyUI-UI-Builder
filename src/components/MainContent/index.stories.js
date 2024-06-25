import { userEvent, within } from '@storybook/test';
import component from '.';

export default {
  title: 'MainContent',
  component,
};

export const MainContent = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
