import { initialize, mswLoader, getWorker } from 'msw-storybook-addon';
import { withScreenshot } from 'storycap';
// eslint-disable-next-line import/no-extraneous-dependencies
import comfyMock from '@ui-builder/comfybridge/comfyMock';
import ProjectDecorator from '../ProjectDecorator';

const location = `${window.location.origin}${window.location.pathname.replace('/iframe.html', '/')}`;

console.log(window.location.pathname, { location });

initialize(
  {
    serviceWorker: {
      url: `${location}mockServiceWorker.js`,
      options: {
        scope: location,
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
