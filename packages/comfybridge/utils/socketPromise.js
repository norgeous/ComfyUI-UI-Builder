import uuidv4 from './uuidv4';

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

export default socketPromise;
