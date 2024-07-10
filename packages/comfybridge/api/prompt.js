import simpleFetch from '../utils/simpleFetch';

const prompt = ({ state, updateState, promptData }) => {
  // if (!comfyUrl) return;
  simpleFetch({
    url: `${state.ws.comfyUrl}/prompt`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: state.ws.clientId,
        prompt: promptData,
      }),
    },
    adapter: res => res.json(),
    onChange: newState => {
      updateState('prompt', newState);

      const { prompt_id: promptId } = newState.data || {};
      if (promptId) {
        updateState('queue', {
          [promptId]: {},
        });
      }
    },
  });
};

export default prompt;
