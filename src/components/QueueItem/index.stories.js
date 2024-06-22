import { fn } from '@storybook/test';
import component from '.';

export default {
  title: 'QueueItem',
  component,
};

export const Loading = {
  args: {
    jobName: 'Job 1',
    isLoading: true,
    status: 'Running…',
    onInterrupt: fn(),
  },
};

export const InterruptLoading = {
  args: {
    jobName: 'Job 1',
    isLoading: true,
    status: 'Running…',
    onInterrupt: fn(),
    interruptLoading: true,
  },
};

export const InterruptError = {
  args: {
    jobName: 'Job 1',
    isLoading: true,
    status: 'Running…',
    onInterrupt: fn(),
    interruptError: 'There was a problem with the interrupt',
  },
};
