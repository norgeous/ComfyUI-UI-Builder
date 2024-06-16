import component from '.';

export default {
  title: 'Sidebar',
  component,
};

export const Sidebar = {
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      viewport: {
        width: 413, // half the width of github README.md on desktop
        height: 700,
      },
    },
  },
  args: {},
};
