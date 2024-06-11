import { withScreenshot } from 'storycap';
import ProjectDecorator from '../ProjectDecorator';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', selector: '*:not(.muted):not(.muted *)' },
        ],
      },
    },

    screenshot: {
      // https://github.com/reg-viz/storycap#api
      delay: 200, // default 0 msec
      variants: {
        // dark: {
        //   colorScheme: 'dark',
        // },
      },
    },
  },

  decorators: [withScreenshot, ProjectDecorator],
};

export default preview;
