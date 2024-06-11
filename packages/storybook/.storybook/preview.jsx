/* eslint-disable import/no-extraneous-dependencies */
import Providers from '@/Providers';
import { GlobalStyle, Theme1Style } from '@/components/globalStyles';
import { withScreenshot } from 'storycap';

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
    },
  },

  decorators: [
    Story => (
      <>
        <GlobalStyle />
        <Theme1Style />
        <Providers>
          <Story />
        </Providers>
      </>
    ),
    withScreenshot,
  ],
};

export default preview;
