import { within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'QueueItem',
  component,
};

export const Queued = {
  args: {
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
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
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    type: 'executing',
    node: null,
    value: 28,
    max: 28,
    images: ['/view?filename=01'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button')[1]);
  },
};
