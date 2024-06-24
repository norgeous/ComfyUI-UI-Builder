import uuidv4 from '@/utils/uuidv4';
import getWebSocket from './getWebSocket';
import simpleFetch from './simpleFetch';

// new package to do the following (without react)

// TODO:
// - get objectInfo
// - queue
//   - executePrompt
//   - executeInterrupt
// - image and video uploading and downloading

const defaultWsUrls = [
  'ws://localhost:8188',
  `ws://localhost:${window.location.port}`,
  `ws://${window.location.hostname}:${window.location.port}`,
];

// find open websocket (and attach callbacks) from a list of urls
// TODO: add retry here
const connectWs = ({
  wsUrls = defaultWsUrls,
  onChange = () => {},
  onConnect = () => {},
}) => {
  const wsId = uuidv4();
  onChange({ wsId });
  return getWebSocket({
    clientId: wsId,
    wsUrls,
    onChange,
    onConnect,
  });
};

// Get all the object info (node info)
const getObjectInfo = ({ comfyUrl, onChange }) => {
  if (!comfyUrl) return;
  simpleFetch({
    url: `${comfyUrl}/object_info`,
    onChange,
    adapter: res => res.json(),
  });
};

// callback based object for communicating with comfyui api
const comfyBridge = () => {
  const state = {
    ws: {},
    objectInfo: {},
  };

  const connect = async ({ wsUrls = defaultWsUrls, onChange = () => {} }) => {
    const handleChangeWs = newData => {
      state.ws = { ...state.ws, ...newData };
      console.log('calling the original react', state);
      onChange(state);
    };

    const handleChangeObjectInfo = newData => {
      state.objectInfo = { ...state.objectInfo, ...newData };
      onChange(state);
    };

    connectWs({
      wsUrls,
      onChange: handleChangeWs,
      onConnect: () => {
        getObjectInfo({
          comfyUrl: state.ws.comfyUrl,
          onChange: handleChangeObjectInfo,
        });
      },
    });
  };

  // prompting
  const prompt = ({ comfyUrl, promptData, onChange }) => {
    const jobId = uuidv4();
    // TODO: the job id needs to go into the queue
    onChange({ jobId });
    simpleFetch({
      url: `${comfyUrl}/prompt`,
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: jobId,
          prompt: promptData,
        }),
      },
      onChange,
      adapter: res => res.json(),
    });
  };

  const destroy = () => {
    state.ws = undefined;
    state.objectInfo = undefined;
    state.socket?.close();
  };

  return {
    state,
    connect,
    // connectWs,
    // getObjectInfo,
    prompt,
    destroy,
  };
};

export default comfyBridge;
