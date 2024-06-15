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
        width: 830,
        height: 600,
      },
      variants: {
        small: {
          viewport: 'iPhone 5',
        },
        // large: {
        //   viewport: {
        //     width: 830,
        //     height: 600,
        //   },
        // },
        // large_dark: {
        //   forceDark: true,
        // },
      },
    },
  },
  args: {},
};
