import { userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'StatusLight',
  component,
};

export const DEFAULT = {
  args: {
    status: 'DEFAULT',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};

export const CONNECTING = {
  args: {
    status: 'CONNECTING',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};

export const CONNECTED = {
  args: {
    status: 'CONNECTED',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};

export const DISCONNECTED = {
  args: {
    status: 'DISCONNECTED',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
