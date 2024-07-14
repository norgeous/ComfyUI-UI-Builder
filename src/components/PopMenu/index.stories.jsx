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
    menuContents: (
      <>
        <button type="button" onClick={fn()}>
          Option 1
        </button>
        <button type="button" onClick={fn()}>
          Option 2
        </button>
        <button type="button" onClick={fn()}>
          Option 3
        </button>
      </>
    ),
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
    menuContents: (
      <>
        <button type="button" onClick={fn()}>
          Option 1
        </button>
        <button type="button" onClick={fn()}>
          Option 2
        </button>
        <button type="button" onClick={fn()}>
          Option 3
        </button>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
