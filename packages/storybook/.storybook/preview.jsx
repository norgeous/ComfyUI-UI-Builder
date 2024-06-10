import Providers from '@/Providers';
import { GlobalStyle, Theme1Style } from '@/components/globalStyles';

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
  ],
};

export default preview;
