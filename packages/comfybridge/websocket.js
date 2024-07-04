import uuidv4 from './utils/uuidv4';

const TIMEOUT = 1500; // websocket is rejected if it fails to open within this amount of ms

const socketPromise = ({ url, onChange, onMessage }) =>
  new Promise(resolve => {
    const socket = new WebSocket(url);

    socket.addEventListener('open', () => {
      const comfyUrl = `${window.location.protocol}//${new URL(socket.url).host}`;
      onChange({ status: 'CONNECTED', comfyUrl });
    });

    setTimeout(async () => {
      if (socket.readyState !== WebSocket.OPEN) {
        socket.close();
        resolve(undefined);
      } else {
        socket.addEventListener('close', () => {
          onChange({ status: 'DISCONNECTED' });
        });
        socket.addEventListener('message', event => {
          console.log('onMessage', onMessage);
          onMessage(JSON.parse(event.data));
        });
        resolve(socket);
      }
    }, TIMEOUT);
  });

const defaultWsUrls = [
  ...new Set([
    `ws://${window.location.hostname}:${window.location.port}`,
    'ws://localhost:8188',
    `ws://localhost:${window.location.port}`,
  ]),
];

const loop = ({ onChange, onMessage }) =>
  new Promise(resolve => {
    (async () => {
      const id = uuidv4();

      /* eslint-disable no-await-in-loop */
      // eslint-disable-next-line no-restricted-syntax
      for (const wsUrl of defaultWsUrls) {
        const url = `${wsUrl}/ws?clientId=${id}`;

        onChange({ status: 'CONNECTING', statusText: wsUrl });
        const socket = await socketPromise({ url, onChange, onMessage });
        if (socket) {
          resolve(socket);
          break; // stop searching
        }
      }

      resolve(undefined);
    })();
  });

const sleep = delta =>
  new Promise(resolve => {
    setTimeout(resolve, delta);
  });

const connectWs = ({ onChange, onMessage }) => {
  let active = true;
  let socket;

  (async () => {
    while (active) {
      if (
        !socket ||
        [WebSocket.CLOSED, WebSocket.CLOSING].includes(socket.readyState)
      ) {
        socket = await loop({ onChange, onMessage });

        if (!socket) {
          onChange({ status: 'DEFAULT', statusText: 'Waiting…' });
        }
      }
      await sleep(5_000);
    }
  })();

  const destroyRetry = () => {
    active = false;
  };

  return { destroyRetry };
};

export default connectWs;
