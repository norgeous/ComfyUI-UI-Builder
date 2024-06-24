import { fn, within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'QueueItem',
  component,
};

export const Loading = {
  args: {
    isLoading: true,
    status: 'Running…',
    progress: 0.25,
    onInterrupt: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
};

export const InterruptLoading = {
  args: {
    isLoading: true,
    status: 'Running…',
    progress: 0.5,
    onInterrupt: fn(),
    interruptLoading: true,
  },
};

export const InterruptError = {
  args: {
    isLoading: true,
    status: 'Running…',
    progress: 0.75,
    onInterrupt: fn(),
    interruptError: 'There was a problem with the interrupt',
  },
};
