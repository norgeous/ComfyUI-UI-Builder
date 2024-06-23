const TIMEOUT = 1000;

const socketPromise = (url, onChangeWs) =>
  new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    socket.addEventListener('open', onChangeWs);
    setTimeout(async () => {
      if (socket.readyState !== WebSocket.OPEN) {
        socket.close();
        reject(new Error(`WebSocket ${url} Timeout after ${TIMEOUT}ms`));
      } else resolve(socket);
    }, TIMEOUT);
  });

// try to make socket from list, one-by-one until it opens or timeout occurs
const getWebSocket = async ({ clientId, wsUrls, onChangeWs }) => {
  let socket;

  for (let i = 0; i < wsUrls.length; i += 1) {
    const wsUrl = wsUrls[i];
    onChangeWs(`trying ${wsUrl}`);
    const url = `${wsUrl}/ws?clientId=${clientId}`;
    try {
      const soc = await socketPromise(url, onChangeWs); // eslint-disable-line no-await-in-loop

      if (soc) {
        socket = soc;
        break; // stop searching
      }
    } catch (error) {
      // console.error(error);
    }
  }

  if (!socket) throw new Error('no socket found, retry is not implemented yet');

  socket.addEventListener('close', onChangeWs);
  socket.addEventListener('error', d => console.error('WSERROR', d)); // eslint-disable-line no-console
  socket.addEventListener('message', onChangeWs);

  const comfyUrl = `http://${new URL(socket.url).host}`;

  return comfyUrl;
};

export default getWebSocket;
