import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const Checkbox = {
  args: {
    id: 'demo',
    info: 'helpful text...',
    label: 'LCM',
    defaultValueIndex: 1,
    options: [
      {
        label: 'Off',
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
        label: 'On',
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
    error: 'ERR!',
    isLoading: false,
  },
};
