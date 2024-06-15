# @ui-builder/storybook

| command             | does                                                                 |
| ------------------- | -------------------------------------------------------------------- |
| npm run sb          | Load up Storybook in development mode, with hot reloading            |
| npm run build       | Build storybook-static to `packages/storybook/storybook-static`      |
| npm run serve       | Serve previously build storybook-static                              |
| npm run unittest    | Run smoke, play and a11y tests against locally running Storybook     |
| npm run unittest:ci | Build and serve Storybook, then run smoke, play and a11y tests       |
| npm run storycap    | Build and serve Storybook, then take screenshots (png) of each story |

You may need to run `npx playwright install` to get some commands to work
