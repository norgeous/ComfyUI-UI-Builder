/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    // '../../../src/**/*.mdx',
    '../../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  staticDirs: ['../../../public'],

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: '../../vite.config.js',
      },
    },
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
