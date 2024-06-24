import { fn, userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'HeaderToggle',
  component,
};

export const HeaderToggle = {
  args: {
    label: 'I am a HeaderToggle',
    value: true,
    onChange: fn(),
    children: 'T',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
