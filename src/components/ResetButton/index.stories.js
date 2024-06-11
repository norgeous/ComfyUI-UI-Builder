import { expect, fn, userEvent, within } from '@storybook/test';
import component from '.';

export default {
  title: 'ResetButton',
  component,
};

export const ResetButton = {
  args: {
    onClick: fn(),
  },
};

export const ResetButtonPlay = {
  args: {
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  },
};
