import { fn } from '@storybook/test';
import InputFile from './InputFile';
import SimpleStateDecorator from '../../../.storybook/SimpleStateDecorator';

export default {
  title: 'Input/File',
  component: InputFile,
  decorators: [SimpleStateDecorator],
};

export const File = {
  args: {
    id: 'demo',
    label: 'My InputFile Label',
    defaultValue: 'https://placehold.co/600x400',
    options: [
      { label: 'Option 0 (default)', value: 'https://placehold.co/600x400' },
      { label: 'Option 1', value: 'https://placehold.co/600x500' },
      { label: 'Option 2', value: 'https://placehold.co/600x600' },
      { label: 'Option X', value: `/view?type=input&filename=filename.jpg` },
    ],
    defaultOptionIndex: 0,
    onFileUpload: fn(),
    isLoading: false,
    error: 'ERR!',
    info: 'help text',
  },
};
