import { fn, within, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'QueueItem',
  component,
};

export const Failed = {
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: false,
    error: '469',
    data: { error: { message: 'There was a problem' } },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
};

export const Loading = {
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
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
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
    status: 'Running…',
    progress: 0.5,
    onInterrupt: fn(),
    interruptLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
};

export const InterruptError = {
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
    status: 'Running…',
    progress: 0.75,
    onInterrupt: fn(),
    interruptError: 'There was a problem with the interrupt',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
};
