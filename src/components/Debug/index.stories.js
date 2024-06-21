import { expect, userEvent, within } from '@storybook/test';
import component from '.';

export default {
  title: 'Debug',
  component,
};

export const Debug = {
  args: {
    label: 'This is a Debug!',
    data: { a: 1, b: 2, c: 3 },
  },
};

export const DebugOpen = {
  args: {
    label: 'This is a Debug!',
    data: { a: 1, b: 2, c: 3 },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  },
};
