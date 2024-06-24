import { userEvent } from '@storybook/test';
import component from '.';

export default {
  title: 'HeaderInfo',
  component,
};

export const HeaderInfo = {
  args: {
    text: 'I am a HeaderInfo',
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
