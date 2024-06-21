import { userEvent, within } from '@storybook/test';
import component from '.';

export default {
  title: 'Debug',
  component,
};

export const Debug = {
  args: {
    label: 'This is a Debug!',
    data: { foo: 'bar' },
  },
};

export const DebugOpen = {
  args: {
    label: 'This is a Debug!',
    data: { foo: 'bar' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
