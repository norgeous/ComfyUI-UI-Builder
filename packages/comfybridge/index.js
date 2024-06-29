import uuidv4 from './utils/uuidv4';
import getWebSocket from './websocket/getWebSocket';
import simpleFetch from './queue/simpleFetch';
import queueController from './queue/queueController';

// new package to do the following (without react)

// TODO:
// - get objectInfo
// - queue
//   - executePrompt
//   - executeInterrupt
// - image and video uploading and downloading

const defaultWsUrls = [
  ...new Set([
    'ws://localhost:8188',
    `ws://localhost:${window.location.port}`,
    `ws://${window.location.hostname}:${window.location.port}`,
  ]),
];

// find open websocket (and attach callbacks) from a list of urls
// TODO: add retry here
const connectWs = ({
  wsUrls = defaultWsUrls,
  onChange = () => {},
  onConnect = () => {},
}) => {
  const id = uuidv4();
  onChange({ id });
  return getWebSocket({
    clientId: id,
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

const queue = queueController({});

// callback based object for communicating with comfyui api
const comfybridge = ({ wsUrls = defaultWsUrls, onChange = () => {} }) => {
  const state = {
    ws: {},
    objectInfo: {},
    queue: [],
  };
  const updateState = (key, newData) => {
    state[key] = { ...state[key], ...newData };
    onChange(state);
  };
  const updateQueueById = newData => {
    const existingItem = state.queue.find(({ id }) => id === newData.id);
    const otherItems = state.queue.filter(({ id }) => id !== newData.id);
    console.log({ newData, existingItem, otherItems });
    state.queue = existingItem
      ? [
          ...otherItems,
          // update exisitng item
          {
            ...existingItem,
            ...newData,
          },
        ]
      : [...state.queue, newData]; // append to queue
    onChange(state);
  };

  // connect to comfy ws and then object info
  const connect = async () => {
    connectWs({
      wsUrls,
      onChange: newData => updateState('ws', newData),
      onConnect: () => {
        getObjectInfo({
          comfyUrl: state.ws.comfyUrl,
          onChange: newData => updateState('objectInfo', newData),
        });
      },
    });
  };

  // prompting
  const prompt = ({ comfyUrl, promptData }) => {
    const id = uuidv4();
    // TODO: convert the prompt format here!
    simpleFetch({
      url: `${comfyUrl}/prompt`,
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: id,
          prompt: promptData,
        }),
      },
      adapter: res => res.json(),
      onChange: newData =>
        updateQueueById({ id, onRemove: () => {}, ...newData }),
    });
  };

  const destroy = () => {
    state.ws = undefined;
    state.objectInfo = undefined;
    state.socket?.close();
  };

  return {
    state,
    queue,
    connect,
    prompt,
    destroy,
  };
};

export default comfybridge;
