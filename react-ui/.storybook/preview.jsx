import { GlobalStyle, Theme1Style } from '../src/components/globalStyles';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <>
        <GlobalStyle />
        <Theme1Style />
        <Story />
      </>
    ),
  ],
};

export default preview;
