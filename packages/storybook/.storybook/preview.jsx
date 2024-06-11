/* eslint-disable import/no-extraneous-dependencies */
import Providers from '@/Providers';
import { GlobalStyle, Theme1Style } from '@/components/globalStyles';
import { withScreenshot } from 'storycap';

const projectDecorator = (Story, ...other) => {
  console.log({ Story, other });
  return (
    <>
      {JSON.stringify(other.parameters)}
      <GlobalStyle />
      <Theme1Style />
      <Providers>
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
      delay: 2000, // default 0 msec
      variants: {
        dark: {
          colorScheme: 'dark',
        },
        // ...Object.fromEntries(
        //   themeNames
        //     .slice(1)
        //     .map(themeName => [themeName, { theme: themeName }])
        // ),
      },
    },
  },

  decorators: [withScreenshot, projectDecorator],
};

export default preview;
