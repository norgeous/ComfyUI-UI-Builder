import { initialize, mswLoader } from 'msw-storybook-addon';
import { withScreenshot } from 'storycap';
import { ws } from 'msw';
import comfyMock from '@ui-builder/comfybridge/comfyMock';
import ProjectDecorator from '../ProjectDecorator';

const service = ws.link('ws://localhost:8188/ws');

initialize({}, [service.on('connection', comfyMock.wsMock)]);

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

  loaders: [mswLoader],

  decorators: [withScreenshot, ProjectDecorator],
};

export default preview;
