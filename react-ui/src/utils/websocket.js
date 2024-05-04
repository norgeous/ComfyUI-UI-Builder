const TIMEOUT = 1500;

const socketPromise = (url, onOpen) =>
  new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    socket.addEventListener('open', onOpen);
    setTimeout(async () => {
      if (socket.readyState !== WebSocket.OPEN) {
        socket.close();
        reject(new Error(`WebSocket ${url} Timeout after ${TIMEOUT}ms`));
      } else resolve(socket);
    }, TIMEOUT);
  });

// try to make socket from list, one-by-one until it opens or timeout occurs
const getWebSocket = async ({ urls, onOpen }) => {
  let result;

  for (let i = 0; i < urls.length; i += 1) {
    const url = urls[i];
    try {
      const soc = await socketPromise(url, onOpen); // eslint-disable-line no-await-in-loop

      if (soc) {
        result = soc;
        break;
      }
    } catch (error) {
      // console.error(error);
    }
  }

  return result;
};

export default getWebSocket;
