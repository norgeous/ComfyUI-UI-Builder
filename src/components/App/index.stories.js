import component from '.';

export default {
  title: 'App',
  component,
};

export const App = {
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      viewport: {
        width: 830, // the width of github README.md on desktop
        height: 600,
      },
      variants: {
        small: {
          viewport: {
            width: 413, // half the width of github README.md on desktop
            height: 700,
          },
        },
        small_dark: {
          viewport: {
            width: 413, // half the width of github README.md on desktop
            height: 700,
          },
          forceDark: true,
        },
      },
    },
  },
  args: {},
};
