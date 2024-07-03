import uuidv4 from '../utils/uuidv4';

const TIMEOUT = 1500; // websocket is rejected if it fails to open within this amount of ms

const socketPromise = ({ url, onChange, onMessage }) =>
  new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    socket.addEventListener('open', () => {
      const comfyUrl = `${window.location.protocol}//${new URL(socket.url).host}`;
      onChange({ status: 'CONNECTED', comfyUrl });
    });
    socket.addEventListener('close', () => {
      onChange({ status: 'DISCONNECTED' });
    });
    socket.addEventListener('error', err => {
      console.error('WS ERROR', err); // eslint-disable-line no-console
      onChange({ status: 'DISCONNECTED' });
    });
    socket.addEventListener('message', event => {
      onMessage(JSON.parse(event.data));
    });
    setTimeout(async () => {
      if (socket.readyState !== WebSocket.OPEN) {
        socket.close();
        reject(new Error(`WebSocket ${url} Timeout after ${TIMEOUT}ms`));
      } else {
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
  new Promise((resolve, reject) => {
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
      reject();
    })();
  });

const sleep = delta =>
  new Promise(resolve => {
    setTimeout(resolve, delta);
  });

const connectWs = async ({ onChange, onMessage }) => {
  let socket;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (
      !socket ||
      [WebSocket.CLOSED, WebSocket.CLOSING].includes(socket.readyState)
    ) {
      socket = await loop({ onChange, onMessage });
    }
    await sleep(10_000);
  }
};

export default connectWs;
