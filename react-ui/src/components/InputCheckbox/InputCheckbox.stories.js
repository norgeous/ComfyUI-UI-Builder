import InputCheckbox from './InputCheckbox';
import SimpleStateDecorator from '../../../.storybook/SimpleStateDecorator';

export default {
  title: 'Input/Checkbox',
  component: InputCheckbox,
  decorators: [SimpleStateDecorator],
};

export const Checkbox = {
  args: {
    id: 'demo',
    info: 'helpful text...',
    label: 'LCM',
    options: [
      {
        label: 'LCM OFF',
        value: {
          isLcm: false,
          baseSteps: 14,
          stepMultiplier: 14,
          cfg: 6.5,
          samplerName: 'dpmpp_2m',
          scheduler: 'exponential',
        },
      },
      {
        label: 'LCM',
        value: {
          isLcm: true,
          baseSteps: 6,
          stepMultiplier: 4,
          cfg: 2.5,
          samplerName: 'lcm',
          scheduler: 'normal',
        },
      },
    ],
    defaultValue: {
      isLcm: true,
      baseSteps: 6,
      stepMultiplier: 4,
      cfg: 2.5,
      samplerName: 'lcm',
      scheduler: 'normal',
    },
    error: 'ERR!',
    isLoading: false,
  },
};
