import { fn, within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'QueueItem',
  component,
};

export const Loading = {
  args: {
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    type: 'progress',
    node: '7',
    value: 4,
    max: 28,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
};

export const Complete = {
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: false,
    status: 'Done!',
    progress: 1,
    onInterrupt: fn(),
  },
};
