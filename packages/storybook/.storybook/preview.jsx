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
      delay: 2000, // default 0 msec
      viewport: {
        width: 300,
        height: 200,
      },
      variants: {
        dark: { forceDark: true },
      },
    },
  },

  decorators: [withScreenshot, ProjectDecorator],
};

export default preview;
