import { userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'HeaderButton',
  component,
};

export const HeaderButton = {
  args: {
    label: 'I am a HeaderButton',
    children: 'R',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
