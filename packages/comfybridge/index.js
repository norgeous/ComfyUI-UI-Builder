import uuidv4 from './utils/uuidv4';
import simpleFetch from './utils/simpleFetch';
import connectWs from './websocket';

// TODO:
// - get objectInfo
// - queue
//   - executePrompt
//   - executeInterrupt
// - image and video uploading and downloading

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
const comfybridge = ({ onChange = () => {} }) => {
  const state = {
    ws: {},
    objectInfo: {},
    queue: {},
  };
  const updateState = (key, newData) => {
    state[key] = { ...state[key], ...newData };
    onChange(state);
  };

  // connect to comfy ws and then get object info
  const connect = async () => {
    const { destroyRetry } = connectWs({
      onChange: newData => updateState('ws', newData),
      onConnect: () => {
        getObjectInfo({
          comfyUrl: state.ws.comfyUrl,
          onChange: newData => updateState('objectInfo', newData),
        });
      },
      onMessage: message => {
        const { data = {}, type } = message;
        const { prompt_id: promptId, ...otherData } = data;

        if (promptId) {
          updateState('queue', {
            [promptId]: { ...state.queue[promptId], type, ...otherData },
          });
        } else console.log(message);
      },
    });
    state.destroyRetry = destroyRetry;
  };

  // prompting
  const prompt = ({ comfyUrl, promptData }) => {
    const id = uuidv4(); // this should probs be the websocket id
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
      onChange: ({ data = {} }) => {
        const { prompt_id: promptId } = data;
        if (promptId) {
          updateState('queue', {
            [promptId]: {},
          });
        }
      },
    });
  };

  const destroy = () => {
    state.ws = undefined;
    state.objectInfo = undefined;
    state.socket?.close();
    state.destroyRetry();
  };

  return {
    state,
    updateState,

    connect,
    prompt,
    destroy,
  };
};

export default comfybridge;
