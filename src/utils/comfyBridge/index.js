import uuidv4 from '../uuidv4';
import getWebSocket from './getWebSocket';

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

const comfyBridge = () => {
  // find open websocket (and attach callback) from a list of urls
  // returns the url of comfy, for later GET requests to API
  const connectWs = async ({
    wsUrls = defaultWsUrls,
    onChangeWs = () => {},
  }) => {
    // create uuid for websocket
    const wsId = uuidv4();

    const comfyUrl = await getWebSocket({
      clientId: wsId,
      wsUrls,
      onChangeWs,
    });

    return comfyUrl;
  };

  // Get all the object info (node info)
  const getObjectInfo = async ({ comfyUrl }) => {
    // fetch
    console.log({ comfyUrl });
  };

  // prompting
  const prompt = async () => {
    // create uuid for this job
    const jobId = uuidv4();

    // fetch

    return jobId;
  };

  return { connectWs, getObjectInfo, prompt };
};

export default comfyBridge;
