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
  `ws://localhost:${window.location.port}`,
  'ws://localhost:8188',
  `ws://${window.location.hostname}:${window.location.port}`,
];

// callback based object for communicating with comfyui api
const comfyBridge = () => {
  // find open websocket (and attach callbacks) from a list of urls
  // TODO: add retry here
  const connectWs = ({ wsUrls = defaultWsUrls, onChange = () => {} }) => {
    const wsId = uuidv4();
    onChange({ wsId });
    getWebSocket({
      clientId: wsId,
      wsUrls,
      onChange,
    });
  };

  // Get all the object info (node info)
  const getObjectInfo = ({ comfyUrl, onChange }) => {
    simpleFetch({
      url: `${comfyUrl}/object_info`,
      onChange,
      adapter: res => res.json(),
    });
  };

  // prompting
  const prompt = ({ comfyUrl, promptData, onChange }) => {
    const jobId = uuidv4();
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

  return { connectWs, getObjectInfo, prompt };
};

export default comfyBridge;
