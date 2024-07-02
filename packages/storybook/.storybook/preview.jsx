import { initialize, mswLoader, getWorker } from 'msw-storybook-addon';
import { withScreenshot } from 'storycap';
// eslint-disable-next-line import/no-extraneous-dependencies
import comfyMock from '@ui-builder/comfybridge/comfyMock';
import ProjectDecorator from '../ProjectDecorator';

initialize(
  {
    serviceWorker: {
      url: '/ComfyUI-UI-Builder/pr-preview/pr-22/storybook/mockServiceWorker.js',
      options: {
        scope: '/ComfyUI-UI-Builder/pr-preview/pr-22/storybook/',
      },
    },
  },
  [...comfyMock],
);

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
        width: 412, // half the width of github README.md on desktop
        height: 100,
      },
      variants: {
        dark: { forceDark: true },
      },
    },
  },

  loaders: [mswLoader, () => getWorker().start()],

  decorators: [withScreenshot, ProjectDecorator],
};

export default preview;
