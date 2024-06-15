import component from '.';

export default {
  title: 'App',
  component,
};

export const App = {
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      variants: {
        small: {
          viewport: 'iPhone 5',
        },
        large: {
          viewport: {
            width: 800,
            height: 600,
          },
        },
      },
    },
  },
  args: {},
};
