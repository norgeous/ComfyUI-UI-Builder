import { fn, userEvent, within } from '@storybook/test';
import component from '.';

export default {
  title: 'PopMenu',
  component,
};

export const PopMenuTooltip = {
  args: {
    children: 'Click Me',
    tooltip: 'tooltip',
    options: [
      { label: 'Option 1', onClick: fn() },
      { label: 'Option 2', onClick: fn() },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
};

export const PopMenuOpen = {
  args: {
    children: 'Click Me',
    tooltip: 'tooltip',
    options: [
      { label: 'Option 1', onClick: fn() },
      { label: 'Option 2', onClick: fn() },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
