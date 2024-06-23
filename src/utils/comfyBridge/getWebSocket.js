const TIMEOUT = 1000;

const socketPromise = (url, onChange) =>
  new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    socket.addEventListener('open', event => onChange({ openEvent: event }));
    setTimeout(async () => {
      if (socket.readyState !== WebSocket.OPEN) {
        socket.close();
        reject(new Error(`WebSocket ${url} Timeout after ${TIMEOUT}ms`));
      } else resolve(socket);
    }, TIMEOUT);
  });

// try to make socket from list, one-by-one until it opens or timeout occurs
const getWebSocket = async ({ clientId, wsUrls, onChange, onConnect }) => {
  let socket;

  for (let i = 0; i < wsUrls.length; i += 1) {
    const wsUrl = wsUrls[i];
    onChange({ wsStatus: `trying ${wsUrl}` });
    const url = `${wsUrl}/ws?clientId=${clientId}`;
    try {
      const soc = await socketPromise(url, onChange); // eslint-disable-line no-await-in-loop

      if (soc) {
        socket = soc;
        break; // stop searching
      }
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }

  if (!socket) throw new Error('no socket found, retry is not implemented yet');

  onConnect();

  socket.addEventListener('close', event => onChange({ closeEvent: event }));
  socket.addEventListener('error', d => console.error('WSERROR', d)); // eslint-disable-line no-console
  socket.addEventListener('message', event =>
    onChange({ messageEvent: JSON.parse(event.data) }),
  );

  const comfyUrl = `http://${new URL(socket.url).host}`;

  onChange({ comfyUrl, socket });

  return socket;
};

export default getWebSocket;
