import uuidv4 from './utils/uuidv4';

const TIMEOUT = 1500; // websocket is rejected if it fails to open within this amount of ms

const socketPromise = ({ wsUrl, onChange, onConnect, onMessage }) =>
  new Promise(resolve => {
    const clientId = uuidv4();
    const url = `${wsUrl}/ws?clientId=${clientId}`;
    const socket = new WebSocket(url);

    socket.addEventListener('open', () => {
      const comfyUrl = `${window.location.protocol}//${new URL(socket.url).host}`;
      onChange({ status: 'CONNECTED', clientId, comfyUrl });
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
          onMessage(JSON.parse(event.data));
        });
        resolve(socket);
        onConnect();
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

const loop = ({ onChange, onConnect, onMessage }) =>
  new Promise(resolve => {
    (async () => {
      /* eslint-disable no-await-in-loop */
      // eslint-disable-next-line no-restricted-syntax
      for (const wsUrl of defaultWsUrls) {
        onChange({ status: 'CONNECTING', statusText: wsUrl });
        const socket = await socketPromise({
          wsUrl,
          onChange,
          onConnect,
          onMessage,
        });
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

const connectWs = ({ onChange, onConnect, onMessage }) => {
  let active = true;
  let socket;

  (async () => {
    while (active) {
      if (
        !socket ||
        [WebSocket.CLOSED, WebSocket.CLOSING].includes(socket.readyState)
      ) {
        socket = await loop({ onChange, onConnect, onMessage });

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
