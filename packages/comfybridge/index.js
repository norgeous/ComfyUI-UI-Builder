import connectWs from './api/websocket';
import getObjectInfo from './api/objectInfo';
import prompt from './api/prompt';

// callback based object for communicating with comfyui api
const comfybridge = ({ onChange = () => {} }) => {
  const state = {
    ws: {},
    objectInfo: {},
    prompt: {},
    queue: {},
    queueSelected: {},
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
          state,
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
          if (type === 'executed') {
            updateState('queueSelected', { promptId });
          }
        } // else console.log(message);
      },
    });
    state.destroyRetry = destroyRetry;
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
    prompt: ({ promptData }) => prompt({ state, updateState, promptData }),
    destroy,
  };
};

export default comfybridge;
