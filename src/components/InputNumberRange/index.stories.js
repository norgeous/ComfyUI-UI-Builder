import { userEvent, within } from '@storybook/test';
import SimpleStateDecorator from '@/mocks/SimpleStateDecorator';
import component from '.';

export default {
  title: 'InputNumberRange',
  component,
  decorators: [SimpleStateDecorator],
};

export const Range = {
  args: {
    id: 'demo',
    label: 'My InputNumberRange Label',
    info: 'info text',
    defaultValue: 2,
    min: 42,
    max: 420,
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
    ],
  },
};

export const Number = {
  args: {
    id: 'demo',
    label: 'My InputNumberRange Label',
    info: 'info text',
    defaultValue: 69,
    min: 42,
    max: 420,
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
