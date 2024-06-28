import { initialize, mswLoader } from 'msw-storybook-addon';
import { withScreenshot } from 'storycap';
import { ws } from 'msw';
import ProjectDecorator from '../ProjectDecorator';

const service = ws.link('*');

initialize({}, [
  // { run: (...d) => console.log(d[0].request.url) },
  // {
  //   run:
  // },

  service.on('connection', ({ client }) => {
    console.log('outgoing ws connection:', client.url);
  }),
]);

// console.log({ service });

// service.on('connection', ({ client }) => {
//   console.log('!');
//   // throw new Error('aaaaaaaaaaaaah');
//   client.addEventListener('message', async event => {
//     // const { username, message } = JSON.parse(event.data);
//     // First, broadcast the client message to other clients.
//     // service.broadcastExcept(client, formatMessage(username, message));
//     // await delay(0);
//     // Then, respond to the message for everyone to see.
//     // service.broadcast(formatMessage('msw-bot', `Welcome, ${username}!`));
//     // setTimeout(() => {
//     //   service.broadcast(formatMessage('msw-bot', 'How are you?'));
//     // }, 1500);
//   });
// });

// {
//   // onUnhandledRequest: ({ headers, method, url }) => {
//   //   if (headers.get('User-Agent') !== 'supertest') {
//   //     throw new Error(`Unhandled ${method} request to ${url}`);
//   //   }
//   // },
// },
// [
//   {
//     run: () =>
//   },
// ], // Initialize MSW

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
      viewport: {
        width: 412, // half the width of github README.md on desktop
        height: 100,
      },
      variants: {
        dark: { forceDark: true },
      },
    },

    msw: {
      handlers: {
        mytung: {
          run: () => {
            service.on('connection', ({ client }) => {
              console.log('outgoing ws connection:', client.url);
            });
            return true;
          },
        },
      },
    },
  },

  loaders: [mswLoader],
  decorators: [withScreenshot, ProjectDecorator],
};

export default preview;
