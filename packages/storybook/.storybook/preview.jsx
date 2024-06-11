/* eslint-disable import/no-extraneous-dependencies */
import Providers from '@/Providers';
import { GlobalStyle, Theme1Style } from '@/components/globalStyles';
import { withScreenshot } from 'storycap';

const projectDecorator = (Story, ...other) => {
  console.log({ Story, other });
  return (
    <>
      <GlobalStyle />
      <Theme1Style />
      <Providers>
        data: <pre>{JSON.stringify(other.parameters)}</pre>
        <Story />
      </Providers>
    </>
  );
};

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

  decorators: [withScreenshot, projectDecorator],
};

export default preview;
